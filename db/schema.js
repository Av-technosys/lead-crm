import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const leadsTable = pgTable(
  "leads",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    leadName: varchar("lead_name", { length: 255 }),
    industary: varchar("industary", { length: 255 }),
    position: varchar("position", { length: 255 }),
    source: varchar("source", { length: 255 }),
    companyName: varchar("company_name", { length: 255 }),
    status: varchar("status", { length: 255 }),
    mobile: varchar("mobile", { length: 255 }),
    email: varchar("email", { length: 255 }),
    website: varchar("website", { length: 255 }),
    note: varchar("note", { length: 255 }),
    idDeleted: boolean("id_deleted").default(false),
    isAssigned: boolean("is_assigned").default(false),
    gender: varchar("gender", { length: 255 }),
    country: varchar("country", { length: 255 }),
    followUpCounter: integer("follow_up_counter").default(0),
    createdBy: uuid("created_by"),
    modifiedAt: timestamp("modified_at").defaultNow(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    userFk: foreignKey({
      columns: [table.createdBy],
      foreignColumns: [userTable.id],
      name: "user_fk",
    }),
  })
);

export const userTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  password: varchar("password", { length: 255 }),
  isPasswordByAdmin: boolean("is_password_by_admin").default(false),
  role: varchar("role", { length: 255 }),
  lastActiveAt: timestamp("last_active_at").defaultNow(),
  totalLeads: integer("total_leads").default(0),
  totalAssignedLeads: integer("total_assigned_leads").default(0),
});

// npx drizzle-kit generate
// npx drizzle-kit push
