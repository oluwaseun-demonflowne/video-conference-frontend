CREATE TABLE IF NOT EXISTS "event" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"eventName" varchar NOT NULL,
	"noOfUsers" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "event_id_unique" UNIQUE("id"),
	CONSTRAINT "event_eventName_unique" UNIQUE("eventName")
);
