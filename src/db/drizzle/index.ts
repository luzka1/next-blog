import "dotenv/config";

import { drizzle } from "drizzle-orm/better-sqlite3";
import { drizzle as drizzleLibsql } from "drizzle-orm/libsql";
import Database from "better-sqlite3";
import { createClient } from "@libsql/client";
import { resolve } from "path";

import { postsTable } from "./schemas";

export function getDb() {
  if (process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN) {
    const client = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    return drizzleLibsql(client, {
      schema: {
        posts: postsTable,
      },
      logger: false,
    });
  }

  const sqlitePath = resolve(process.cwd(), "db.sqlite3");
  const sqliteDb = new Database(sqlitePath);

  return drizzle(sqliteDb, {
    schema: {
      posts: postsTable,
    },
    logger: false,
  });
}

export const drizzleDb = getDb();
