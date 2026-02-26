# CSAI (Customer Support Advanced Intelligence)

CSAI is a multi-tenant SaaS platform for tiered AI-powered customer support operations.

## PR1 scope delivered

- Next.js 14 App Router + TypeScript + Tailwind bootstrap.
- shadcn-compatible base UI components and dashboard shell.
- Prisma with initial Tenant/User/Auth schema.
- NextAuth credentials provider with tenant-aware session fields.
- Docker Compose for Postgres (pgvector image) and Redis.
- `/api/health` endpoint.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env:
   ```bash
   cp .env.example .env
   ```
3. Start infra:
   ```bash
   docker compose up -d postgres redis
   ```
4. Run migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Seed demo data:
   ```bash
   npm run prisma:seed
   ```
6. Start app:
   ```bash
   npm run dev
   ```

## Environment variables

See `.env.example` for required values.

## Security notes

- Keep `AUTH_SECRET` and `ENCRYPTION_KEY` private.
- Do not commit real provider keys or connector tokens.
- Secrets encryption and role-based authorization will be extended in later PRs.

## Next steps

- PR2: tenant middleware + RBAC + audit utilities.
- PR3+: tiers CRUD, integrations, workflows, RAG, analytics, and background workers.

## Cloud readiness

- Uses PostgreSQL and Redis with dockerized local development.
- Architecture remains cloud-neutral and supports managed services.

## Extension points

- Replace credentials auth provider with SSO/OAuth providers.
- Add real connector implementations under integration service modules.
- Add dedicated worker service for BullMQ sync/index jobs.
