import { Knex } from "knex";

const TABLE_NAME = "users";

/**
 * Create table TABLE_NAME_ITEMS.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table) => {
    // UUID for user ID
    table.uuid("id").defaultTo(knex.raw("gen_random_uuid()")).primary();

    // Add other columns
    table.string("name").notNullable();
    table.string("username").unique().notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table
      .enu("account_type", ["admin", "regular"])
      .defaultTo("regular")
      .notNullable();

    // Timestamps for created and updated times
    table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));
    table.timestamp("updated_at").nullable();
  });
}

/**
 * Drop tables TABLE_NAME_ITEMS and TABLE_NAME_USERS.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
