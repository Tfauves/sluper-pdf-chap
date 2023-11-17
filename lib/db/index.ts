import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URL) {
  throw new Error("database url not found!");
}

// connects db
const sql = neon(process.env.DATABASE_URL);

// this var will be used to interact with the db
export const db = drizzle(sql);
