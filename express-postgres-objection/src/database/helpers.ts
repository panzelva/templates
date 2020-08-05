import Knex from 'knex'

// Migrations
export const addBasicFieldsToTable = (knex: Knex, table: Knex.CreateTableBuilder) => {
  // Primary key
  table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))

  // Created and Updated
  table.timestamps(false, true)
}
