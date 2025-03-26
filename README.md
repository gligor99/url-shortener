# URL Shortener

A simple URL shortening service built with Node.js, Express, and PostgreSQL.

## Features

- Shorten long URLs to compact, unique identifiers
- Redirect from short URLs to original URLs
- RESTful API endpoints
- PostgreSQL database for URL storage
- Docker containerization

## Tech Stack

- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Language**: TypeScript
- **Testing**: Supertest
- **Container**: Docker & Docker Compose

## API Endpoints

- `POST /shorten` - Create a short URL

  - Body: `{ "url": "https://example.com" }`
  - Response: `{ "shortUrl": "http://localhost:3000/{id}" }`

- `GET /{id}` - Redirect to original URL

## Getting Started

1. Clone the repository
2. Start the services:

```bash
docker-compose up
```
