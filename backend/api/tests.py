from django.core.cache import cache
from django.test import override_settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Question


class QuestionAPITests(APITestCase):
    def setUp(self):
        cache.clear()

    @override_settings(QUESTION_NOTIFY_EMAIL="")
    def test_create_question_success(self):
        url = reverse('question-create')

        payload = {"name":"Sasha",
                   "email":"miller@gmail.com",
                   "message":"Test1",
                   "website": ""}
        res=self.client.post(url, payload,format='json')

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)

        self.assertEqual(Question.objects.count(), 1)
        q=Question.objects.first()
        self.assertEqual(q.name, payload['name'])
        self.assertEqual(q.email, payload['email'])
        self.assertEqual(q.message, payload['message'])

        data=res.json()
        for key in ("id", "name", "email", "message", "created_at"):
            self.assertIn(key, data)

    def test_honeypot_blocks_spam(self):
        cache.clear()
        url = reverse('question-create')
        payload = {"name":"Sasha2",
                   "email":"nick@gmail.com",
                   "message":"Test2",
                   "website": "pub"}
        res = self.client.post(url, payload, format='json')
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

        data = res.json()
        self.assertIn("website",data)
        self.assertEqual(Question.objects.count(), 0)


    @override_settings(QUESTION_NOTIFY_EMAIL="")
    def test_cooldown_returns_429_on_second_request(self):
        cache.clear()
        url = reverse('question-create')
        payload = {"name":"Sasha3",
                   "email":"gkerog@gmail.com",
                   "message":"Test3",
                    "website": ""}
        res1=self.client.post(url, payload, format='json')
        self.assertEqual(res1.status_code, status.HTTP_201_CREATED)

        payload2 = {"name":"Sasha3",
                    "email":"gkerog@gmail.com",
                    "message":"GG",
                    "website": ""}
        res2 = self.client.post(url, payload2, format='json')
        self.assertEqual(res2.status_code, status.HTTP_429_TOO_MANY_REQUESTS)

    @override_settings(QUESTION_NOTIFY_EMAIL="")
    def test_message_too_long_returns_400(self):
        cache.clear()
        url = reverse("question-create")
        payload = {
            "name": "Sasha4",
            "email": "limit@gmail.com",
            "message": "x" * 2001,
            "website": "",
        }

        res = self.client.post(url, payload, format="json")
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("message", res.json())
        self.assertEqual(Question.objects.count(), 0)
