import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { location } from './location'

export const locationLog = sqliteTable('locationLog', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  locationId: int().notNull().references(() => location.id),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
})
