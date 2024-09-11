import { Knex } from "knex";
const TABLE_NAME = "items";
/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigint("id").primary().unsigned().notNullable();

    // Add other columns
    table.string("name").notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.string("image").nullable();
    table.integer("quantity").unsigned().defaultTo(0).notNullable();

    // Timestamps for created and updated times
    table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));
    table.timestamp("updated_at").nullable();
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
