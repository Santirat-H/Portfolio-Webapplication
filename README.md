# portfolio-web

Personal developer portfolio. Simple monorepo with two independent apps (not
connected to each other yet).

```
portfolio-web/
├── web/   # Next.js (App Router) + TypeScript + Tailwind v4 — the site
└── api/   # NestJS + TypeScript — scaffold + a single health-check endpoint
```

## Run the site (web)

```bash
cd web
npm run dev        # → http://localhost:3000
```

Hero landing + scroll-down file-manager showcase. A dev-only accent color
switcher sits in the bottom-right corner.

## Run the API (api)

```bash
cd api
npm run start      # → http://localhost:3001
# health check:
curl http://localhost:3001/health
```

The API runs on port **3001** so it doesn't collide with web on 3000.
