# Project Context for AI Assistants

## Identity
- **Project:** template-nextjs-kimi
- **Type:** Next.js 15 App Router — Frontend-First Scaffold
- **Owner:** Ozan (Aoha)
- **AI Operator:** Atlas

## Stack
- **Framework:** Next.js 15.2+ (App Router)
- **Language:** TypeScript 5.7+ (strict)
- **Styling:** Tailwind CSS 4.x
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library + jsdom
- **Linting:** ESLint 9 + eslint-config-next

## Backend (Phase 2 — LOCKED until frontend approved)
- **Database:** PostgreSQL (planned)
- **ORM:** Prisma 6+ (planned)
- **Auth:** NextAuth.js v5 (planned)
- **API:** Next.js API Routes (planned)

## Key Files
- [SPEC.md](../docs/SPEC.md) — Problem, goals, use case
- [PROGRESS.md](../docs/PROGRESS.md) — Status, completed, next
- [SCHEMA.md](../docs/SCHEMA.md) — Data model (mock = future DB schema)
- [src/lib/mock-data.ts](../src/lib/mock-data.ts) — Mock data (matches SCHEMA.md exactly)

## Conventions
- **Naming:** camelCase functions/variables, PascalCase components/types, kebab-case files
- **Folders:** `src/app/{feature}/{page}.tsx` for routes, `src/components/{category}/{Component}.tsx` for components
- **Data:** All mock data in `src/lib/mock-data.ts`, typed in `src/types/`
- **Forms:** Client components with `useState`, validation before submit
- **State:** React `useState` + `useContext` (no external state lib in Phase 1)

## Do's
- Run `npm run build` after file changes (must pass)
- Keep mock data structure matching SCHEMA.md exactly
- Write components as small, reusable units
- Use `src/components/ui/` for shadcn components only
- Test happy path + 1 edge case per feature

## Don'ts
- **NO backend code in Phase 1** (no API routes, no DB calls)
- **NO schema changes without updating mock-data.ts**
- Don't modify `SCHEMA.md` without owner approval
- Don't add new dependencies without asking
- Don't skip TypeScript strict mode

## Commands
- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — typecheck + build (must pass before commit)
- `npm run lint` — ESLint check
- `npm run test` — run tests
- `npm run test:ui` — run tests with UI

## Development Phases

### Phase 1: Frontend (CURRENT — No Backend)
- All pages built with mock data
- All interactions work client-side
- Mock data structure = future DB schema
- **Status:** ⏳ In Progress

### Phase 2: Backend (LOCKED)
- API endpoints
- Database + Prisma
- Auth integration
- **Status:** ⬜ Locked — starts when owner says "frontend done"

## Approval Gate
**Frontend is done when:**
- [ ] All pages exist & navigable
- [ ] All interactions functional (CRUD on mock data)
- [ ] Mock data complete & matches SCHEMA.md
- [ ] `npm run build` passes
- [ ] Owner approves: "Good, do backend"

## Async Workflow
1. Owner gives feature spec → AI codes → push branch
2. Vercel auto-deploys preview → Owner checks link
3. Owner gives feedback (async) → AI updates → re-deploy
4. Repeat until approved → merge to main
