import { Config } from "drizzle-kit";

export default {
  dbCredentials: {
    connectionString:
      "postgresql://Tfauves:qbnT6hdDeHM1@ep-delicate-morning-65066635.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
  driver: "pg",
  out: "./drizzle/migrations",
  schema: "./lib/schema.ts",
  strict: true,
  verbose: true,
} satisfies Config;

// npx drizzle-kit push:pg
