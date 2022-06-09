-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Database is called "shopping_list_database"

CREATE TABLE "shopping_list" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "quantity" REAL NOT NULL,
    "unit" VARCHAR(80)
);

-- Dummy data
INSERT INTO "shopping_list" 
    ("name","quantity", "unit")
VALUES
    ('eggs', 12, 'carton'),
    ('milk', .5, 'gallon'),
    ('waffles', 24, 'box');

INSERT INTO "shopping_list" 
    ("name","quantity")
VALUES
    ('lettuce', 4);