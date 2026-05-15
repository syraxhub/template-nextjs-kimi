# ARCHITECTURE.md — Technical Design

## Overview
High-level architecture for `template-nextjs-kimi`. Updated as project evolves.

## Stack
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.7+ |
| Styling | Tailwind CSS 4.x |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Testing | Vitest + React Testing Library |

## Data Flow (Phase 1: Frontend Only)
```
User Action
    ↓
React Component (Client)
    ↓
useState / useContext (Local State)
    ↓
Mock Data (src/lib/mock-data.ts)
    ↓
UI Re-renders
```

## Data Flow (Phase 2: Full Stack)
```
User Action
    ↓
React Component (Client)
    ↓
API Call (fetch/axios)
    ↓
Next.js API Route (Server)
    ↓
Prisma ORM
    ↓
PostgreSQL
    ↓
Response → UI Re-renders
```

## Folder Structure
```
src/
├── app/              # Next.js App Router (pages & layouts)
│   ├── dashboard/    # Protected routes
│   └── api/          # API routes (Phase 2)
├── components/
│   ├── layout/       # DashboardLayout, Sidebar, Header
│   └── ui/           # shadcn/ui components
├── lib/
│   ├── mock-data.ts  # Mock data (Phase 1)
│   └── utils.ts      # Helpers
├── types/            # TypeScript types
└── hooks/            # Custom React hooks (if needed)
```

## Component Hierarchy
```
RootLayout
└── DashboardLayout
    ├── Sidebar (navigation)
    ├── Header (user info, notifications)
    └── Main Content
        ├── DashboardPage (stats, recent items)
        ├── ItemsPage (list, search, CRUD)
        ├── CreateItemPage (form)
        ├── ItemDetailPage (view)
        └── EditItemPage (form)
```

## State Management
- **Phase 1:** React useState + props drilling (simple, no external lib)
- **Phase 2:** Consider React Context or Zustand if state grows

## Key Decisions
| Decision | Choice | Reason |
|----------|--------|--------|
| App Router | Yes | Latest Next.js pattern, better for SSR/SSG |
| Server Components | Mixed | Layouts = server, Forms = client |
| Mock Data | Centralized | Single source of truth, easy to migrate |
| Type Safety | Strict | Catch errors early |

## Notes
- [OWNER: Update when adding new features or changing architecture]
