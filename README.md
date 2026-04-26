# Framr Stage 1 — AI Chat Workspace UI

A frontend-only Next.js (App Router) + TypeScript + Tailwind CSS UI for a premium multi-mode AI chat workspace.

## Chat Modes

- `/chat/general`
- `/chat/coding`
- `/chat/math`

Each mode uses mock responses only (no backend or API integrations).

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel Deployment

This project is ready for Vercel:

1. Push to GitHub.
2. Import the repository in Vercel.
3. Framework preset: **Next.js** (auto-detected).
4. Keep defaults (or use `vercel.json` in this repo).
5. Deploy.

## Important Constraint

This is strictly frontend-only. No backend routes, server actions, or external AI API calls are implemented.
