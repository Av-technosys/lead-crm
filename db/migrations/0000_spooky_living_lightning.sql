CREATE TABLE "leads" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lead_name" varchar(255),
	"industary" varchar(255),
	"position" varchar(255),
	"source" varchar(255),
	"company_name" varchar(255),
	"status" varchar(255),
	"mobile" varchar(255),
	"email" varchar(255),
	"website" varchar(255),
	"note" varchar(255),
	"id_deleted" boolean DEFAULT false,
	"is_assigned" boolean DEFAULT false,
	"gender" varchar(255),
	"country" varchar(255),
	"follow_up_counter" integer DEFAULT 0,
	"created_by" uuid,
	"modified_at" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255),
	"email" varchar(255),
	"password" varchar(255),
	"is_password_by_admin" boolean DEFAULT false,
	"role" varchar(255),
	"last_active_at" timestamp DEFAULT now(),
	"total_leads" integer DEFAULT 0,
	"total_assigned_leads" integer DEFAULT 0
);
--> statement-breakpoint
ALTER TABLE "leads" ADD CONSTRAINT "user_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;