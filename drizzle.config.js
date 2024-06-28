import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
    schema: "./configs/schema.js",
    out: "./drizzle",
    dialect: 'postgresql',
    dbCredentials:{
        database:'aiforms',
        url:NEXT_PUBLIC_DB_URL,
    },
});
