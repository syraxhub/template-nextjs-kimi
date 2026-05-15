# DECISIONS.md — Decision Log

## Format
```
### [DATE] — [Decision Title]
- **Context:** [Why this decision needed]
- **Options Considered:**
  1. [Option A]
  2. [Option B]
- **Decision:** [What we chose]
- **Reason:** [Why]
- **Consequences:** [Trade-offs]
- **Reversible:** [Yes/No — if yes, when]
```

---

### 2026-05-15 — Next.js Version
- **Context:** Choosing Next.js version for template
- **Options Considered:**
  1. Next.js 15.2 (stable, proven)
  2. Next.js 16.2 (latest, possible breaking changes)
- **Decision:** Next.js 15.2
- **Reason:** Stability over bleeding edge for template
- **Consequences:** May need upgrade later
- **Reversible:** Yes — upgrade path documented

### 2026-05-15 — Frontend-First Approach
- **Context:** Owner prefers seeing UI before backend
- **Options Considered:**
  1. Backend-first (traditional)
  2. Frontend-first (UI-driven)
- **Decision:** Frontend-first
- **Reason:** Owner can visualize flow, give better feedback
- **Consequences:** Mock data must match future schema exactly
- **Reversible:** No — this is workflow philosophy

### 2026-05-15 — Mock Data as Schema Source
- **Context:** Need data for frontend, will become DB schema later
- **Options Considered:**
  1. Separate mock + schema (risk of divergence)
  2. Mock = Schema (single source of truth)
- **Decision:** Mock = Schema
- **Reason:** Zero migration effort, types enforce consistency
- **Consequences:** Mock data structure locked until Phase 2
- **Reversible:** No — core workflow rule

### 2026-05-15 — Styling: Tailwind CSS
- **Context:** Choosing CSS approach
- **Options Considered:**
  1. Tailwind CSS (utility-first)
  2. CSS Modules (scoped)
  3. Styled Components (CSS-in-JS)
- **Decision:** Tailwind CSS
- **Reason:** Fast iteration, consistent design system, works with shadcn
- **Consequences:** HTML can get verbose with many classes
- **Reversible:** Yes — can mix with CSS Modules

### 2026-05-15 — No External State Library (Phase 1)
- **Context:** State management for frontend-only phase
- **Options Considered:**
  1. React useState only
  2. Zustand / Redux / Jotai
- **Decision:** React useState only
- **Reason:** Simple enough for mock data, less dependencies
- **Consequences:** May need refactor if state grows complex
- **Reversible:** Yes — add Zustand in Phase 2 if needed

---

## Pending Decisions
- [ ] Auth provider (NextAuth vs Clerk vs custom)
- [ ] Database hosting (Vercel Postgres vs Supabase vs self-hosted)
- [ ] File upload strategy (if needed)
- [ ] Real-time features (WebSocket vs SSE vs polling)

## Notes
- [OWNER: Add new decisions as they happen]
- Review monthly — some decisions may need revisiting
