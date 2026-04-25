# ULTP Website

Multilingual corporate website for Ukrainian Legal and Tech Partners.

The project includes:

- a public frontend built with Vite and vanilla JavaScript
- a Django REST Framework backend
- PostgreSQL for storing contact form submissions

The current version is deployed and used as a live website: `https://ultp.com.ua`

## Stack

### Frontend

- Vite
- vanilla JavaScript
- Sass
- i18next
- Vitest
- ESLint
- Prettier

### Backend

- Django
- Django REST Framework
- PostgreSQL
- django-cors-headers
- python-dotenv
- psycopg
- gunicorn

## Project Structure

```text
.
|-- backend/
|   |-- api/
|   |-- config/
|   |-- manage.py
|   `-- requirements.txt
|-- docs/
|   |-- api-spec.md
|   |-- er-diagram.md
|   |-- technical-spec.md
|   `-- test-cases.md
|-- frontend/
|   |-- public/
|   |-- src/
|   |-- tests/
|   `-- package.json
`-- README.md
```

## Local Setup

### Backend

```bash
cd backend
python -m venv .venv
pip install -r requirements.txt
```

Create `.env` from `.env.example`, configure PostgreSQL, then run:

```bash
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Useful Commands

### Frontend

```bash
npm run dev
npm run build
npm run lint
npm run test
```

### Backend

```bash
python manage.py check
python manage.py test
```

## Public API

- `GET /api/health/`
- `POST /api/questions/`

## Documentation

Additional project documentation is stored in `docs/`:

- `technical-spec.md`
- `api-spec.md`
- `test-cases.md`
- `er-diagram.md`
