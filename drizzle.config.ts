import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "student_tracker",
  }
} satisfies Config;