import { pgTable, serial, text, varchar,integer,boolean } from "drizzle-orm/pg-core";

export const Jsonforms = pgTable('jsonforms', {
  id: serial('id').primaryKey(),
  jsonform:text('jsonform').notNull(),
  // Update the schema
  theme:varchar('theme'),
  background:varchar('background'),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt').notNull(),
  enabledSignIn:boolean('enabledSignIn').default(false),
});


export const userResponse=pgTable('userResponse',{
  id:serial('id').primaryKey(),
  jsonResp:text('jsonResp').notNull(),
  createdBy: varchar('createdBy').default("anonymous"),
  createdAt: varchar('createdAt').notNull(),
  formRef:integer('formRef').references(()=>Jsonforms.id)
})
