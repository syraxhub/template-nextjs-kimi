# API.md — API Specification

## Status
⬜ Not Started — Phase 2 only

## Overview
This document defines API contracts between frontend and backend. Created when Phase 2 begins.

## Base URL
```
Development: http://localhost:3000/api
Production: https://[project].vercel.app/api
```

## Authentication
- **Method:** [TBD — JWT / Session / OAuth]
- **Header:** `Authorization: Bearer <token>`

## Endpoints

### Items

#### GET /api/items
- **Description:** List all items
- **Query Params:**
  - `status` (optional): Filter by status
  - `search` (optional): Search term
  - `page` (optional): Page number
  - `limit` (optional): Items per page
- **Response:**
```json
{
  "items": [
    {
      "id": "string",
      "title": "string",
      "description": "string | null",
      "status": "active | inactive | archived",
      "userId": "string",
      "createdAt": "ISO 8601",
      "updatedAt": "ISO 8601"
    }
  ],
  "total": 0,
  "page": 1,
  "limit": 10
}
```

#### GET /api/items/:id
- **Description:** Get single item
- **Response:** Single item object

#### POST /api/items
- **Description:** Create new item
- **Body:**
```json
{
  "title": "string (required)",
  "description": "string (optional)",
  "status": "active | inactive | archived (default: active)"
}
```
- **Response:** Created item

#### PATCH /api/items/:id
- **Description:** Update item
- **Body:** Partial item fields
- **Response:** Updated item

#### DELETE /api/items/:id
- **Description:** Delete item
- **Response:** `{ success: true }`

### Auth

#### POST /api/auth/signin
- **Description:** Sign in user
- **Body:** `{ email, password }` or OAuth provider

#### POST /api/auth/signout
- **Description:** Sign out user

#### GET /api/auth/session
- **Description:** Get current session

## Error Format
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "details": {} // Optional additional info
  }
}
```

## Notes
- [OWNER: Fill when starting Phase 2]
- All dates in ISO 8601 format
- All IDs are CUID strings
