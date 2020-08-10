import Knex from 'knex'
import logger from '../utils/logger'
import { connectToDatabase } from './database'

// Migrations
export const addBasicFieldsToTable = (knex: Knex, table: Knex.CreateTableBuilder): void => {
  // Primary key
  table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))

  // Created and Updated
  table.timestamps(false, true)
}

export const checkDatabaseConnection = async (knex: Knex): Promise<void> => {
  try {
    logger.debug('Checking database connection')
    await knex.raw('SELECT 1')
  } catch (error) {
    logger.error('Cannot connect to database')
    throw new Error('Cannot connect to database')
  }
}

type WithKnexArgFn = (knex: Knex) => Promise<void>
type WithKnexReturnFn = () => Promise<void>

export const withKnex = (fn: WithKnexArgFn): WithKnexReturnFn => {
  return async () => {
    const knex = connectToDatabase()

    try {
      await checkDatabaseConnection(knex)
      await fn(knex)
    } finally {
      await knex.destroy()
    }
  }
}
