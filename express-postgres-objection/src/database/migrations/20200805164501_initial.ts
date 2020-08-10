import * as Knex from 'knex'
import { addBasicFieldsToTable } from '../helpers'

export async function up(knex: Knex): Promise<void> {
  await knex.raw('create extension pgcrypto')

  await knex.schema.createTable('user', (table) => {
    addBasicFieldsToTable(knex, table)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('user')
}
