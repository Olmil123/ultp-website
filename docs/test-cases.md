#! Test Cases

# 1. Open Home Page

**Steps**

1. Open `https://ultp.com.ua/`
2. Wait until the page is loaded

**Expected Result**

- the page opens successfully
- header, main content, and footer are visible:)

# 2. Navigate Between Pages
**Steps**

1. Open the main page
2. Click internal links such as `About`, `Services`, or `Practices`

**Expected Result**

- the route changes correctly
- the new page content is displayed

## 3. Switch Language

**Steps**

1. Open the website
2. Use the language switcher
3. Reload the page

**Expected Result**

- the selected language is applied
- the active language state is preserved after reload

## 4. Submit Contact Form Successfully

**Steps**

1. Open the contact form
2. Enter valid `name`, `email`, and `message`
3. Submit the form

**Expected Result**

- the request is accepted
- success feedback is shown
- a new record is created in the database

## 5. Submit Invalid Form

**Steps**

1. Open the contact form
2. Leave required fields empty
3. Try to submit the form

**Expected Result**

- the form is not submitted
- validation feedback is shown

## 6. Check Health Endpoint

**Steps**

1. Send a request to `GET /api/health/`

**Expected Result**

- backend returns `200 OK`
- response body contains:

```json
{
  "status": "ok"
}
```

## 7. Check Hidden File Protection

**Steps**

1. Open `https://ultp.com.ua/.env`

**Expected Result**

- access is blocked
- server returns `403 Forbidden`

## 8. Browser Compatibility Check

**Steps**

1. Open the website in a chromium-based browser
2. Open the website in safari

**Expected Result**

- the site opens in both browsers
- the main layout is displayed correctly
