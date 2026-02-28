from rest_framework.throttling import AnonRateThrottle


class QuestionBurstThrottle(AnonRateThrottle):
    scope = "questions_burst"


class QuestionHourThrottle(AnonRateThrottle):
    scope = "questions_hour"


class QuestionDayThrottle(AnonRateThrottle):
    scope = "questions_day"
