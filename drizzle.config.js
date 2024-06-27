import { defineConfig } from "drizzle-kit";
 
// const db_url=NEXT_PUBLIC_DB_URL
// url:NEXT_PUBLIC_DB_URL,
export default defineConfig({
    schema: "./configs/schema.js",
    out: "./drizzle",
    dialect: 'postgresql',
    dbCredentials:{
        database:'aiforms',
        url:'postgresql://anandrahul044:HQ1EJKRB4zpm@ep-empty-cell-a5jq232r.us-east-2.aws.neon.tech/aiforms?sslmode=require'
    },
});
