# NLW Agents Server

## Drizzle Commands

Drizzle is used for managing and running database migrations in this project.

- **Run migrations:**  
Apply all pending migrations to your database.

```bash
npm run drizzle-kit migrate
```

- **Open Drizzle Studio:**  
Launch Drizzle Studio, a web UI for managing and inspecting your database.

```bash
npx drizzle-kit studio
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file and configure your variables:

```bash
cp .env.example .env
```

3. Run the migrations as shown above.

## Useful Links

- [Drizzle ORM Documentation](https://orm.drizzle.team/docs)
- [Drizzle Studio](https://orm.drizzle.team/docs/studio)
