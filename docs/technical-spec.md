# Technical Specification

## 1. Project Title

ULTP Website

## 2. Project Goal

Create a multilingual corporate website for Ukrainian Legal and Tech Partners with a public frontend, backend API, and production deployment

## 3. Project Description

The website is designed to present the company online and collect contact requests from visitors through a site form

## 4. Main Features

- public website with several pages
- Ukrainian and english localization
- client-side routing
- contact form
- request storage in database
- email notification for new requests

## 5. Frontend Requirements

- display public pages
- support language switching
- preserve selected language after reload
- work on desktop and mobile devices

## 6. Backend Requirements

- provide a form submission endpoint
- provide a health-check endpoint
- validate submitted data
- store requests in PostgreSQL
- apply anti-spam and throttling rules

## 7. Deployment Requirements

- run under a public domain
- support HTTPS
- serve frontend through nginx
- proxy API requests to Django
- use PostgreSQL

## 8. Expected Result

The final result should be a working multilingual website deployed on a production server and capable of receiving contact requests from users
