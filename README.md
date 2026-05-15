# template-nextjs-kimi

Frontend-first scaffold for vibe coding with Next.js 15 + TypeScript + Tailwind.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
.claude/CLAUDE.md      # AI context (auto-load)
docs/
  SPEC.md              # Problem & goals
  PROGRESS.md          # Development tracking
  SCHEMA.md            # Data model
src/
  app/                 # Next.js App Router
  components/          # React components
  lib/
    mock-data.ts       # Mock data (matches SCHEMA.md)
    utils.ts           # Utilities
  types/               # TypeScript types
```

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run test` — run tests
- `npm run lint` — ESLint

## Workflow

1. Fill `docs/SPEC.md` with your project details
2. Update `docs/SCHEMA.md` with your data model
3. Update `src/lib/mock-data.ts` with your mock data
4. Build frontend pages with mock data
5. Approve frontend → start backend (Phase 2)

## Rules

- **Phase 1:** Frontend only, mock data, no backend
- **Phase 2:** Backend starts only after frontend 100% approved
- Mock data structure must match `SCHEMA.md` exactly
