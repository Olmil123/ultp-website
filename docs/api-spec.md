#! API Specification

#! Base URL

`/api/`

#? 1. Health Check

#! Request

`GET /api/health/`

#! Description

Checks whether the backend is running and accessible

#? Success Response

Status: `200 OK`

```json
{
  "status": "ok"
}
```

# 2. Create Question

#! Request

`POST /api/questions/`

# Description

Creates a new contact request submitted from the website form

# Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to discuss a legal matter",
  "website": "",
  "client_timezone": "Europe/Kyiv"
}
```

# Fields

- `name` - required string
- `email` - required email
- `message` - required string, max 2000 characters
- `website` - optional hidden field, used as honeypot
- `client_timezone` - optional timezone string

# Success response

Status: `201 Created`

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to discuss a legal matter",
  "created_at": "2026-04-22T10:15:00Z"
}
```

# Possible Error Responses

# Invalid request data

Status: `400 Bad Request`

Example:

```json
{
  "message": ["This field may not be blank"]
}
```

# Honeypot triggered

Status: `400 Bad Request`

```json
{
  "website": ["Spam detected"]
}
```

# Duplicate message

Status: `400 Bad Request`

```json
{
  "message": "This message was already sent recently"
}
```

# Too many requests

Status: `429 Too Many Requests`

Example:

```json
{
  "detail": "Please wait before sending the next question"
}
```

## Notes

- The public API is intentionally minimal
- The website currently uses only these two endpoints
- The old public `items` endpoint was removed because it was not used by the frontend
