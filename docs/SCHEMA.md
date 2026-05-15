# SCHEMA.md — Data Model

## Overview
This document defines the data model. **Mock data in Phase 1 must match this exactly.** When backend is built, this becomes the Prisma schema.

---

## Entities

### User
```typescript
interface User {
  id: string;           // UUID / CUID
  email: string;        // unique
  name: string | null;
  image: string | null;
  createdAt: string;    // ISO 8601 date string
  updatedAt: string;    // ISO 8601 date string
}
```

### Item (Example — replace with your entity)
```typescript
interface Item {
  id: string;           // UUID / CUID
  title: string;
  description: string | null;
  status: "active" | "inactive" | "archived";
  userId: string;       // relation to User
  createdAt: string;    // ISO 8601 date string
  updatedAt: string;    // ISO 8601 date string
}
```

## Relationships
- User 1:N Item (one user has many items)

## Enums
```typescript
type ItemStatus = "active" | "inactive" | "archived";
```

## Notes
- All dates as ISO 8601 strings in mock data (e.g., "2026-05-15T08:00:00Z")
- IDs as strings (CUID format)
- Nullable fields marked with `| null`
- [OWNER: Update this file when adding new entities]
