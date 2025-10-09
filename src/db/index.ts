// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

export const db = drizzle(process.env.DATABASE_URL!, { schema });

const result = await db.execute("select 1");
