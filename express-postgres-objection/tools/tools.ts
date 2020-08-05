import { connectToDatabase } from '../src/database/database'
import logger from '../src/utils/logger'
import path from 'path'

export const createSchema = async (): Promise<void> => {
  const knex = connectToDatabase()
  await knex.schema.raw(`create schema if not exists "public"`)
  logger.info('Schema created')
  await knex.destroy()
}

export const dropSchema = async (): Promise<void> => {
  const knex = connectToDatabase()
  await knex.schema.raw(`drop schema if exists "public" cascade`)
  logger.info('Schema dropped')
  await knex.destroy()
}

export const migrateDatabase = async (): Promise<void> => {
  const knex = connectToDatabase()
  logger.info('Migrating database')
  await knex.migrate.latest({ directory: path.join('src', 'database', 'migrations') })
  await knex.destroy()
}

export const seedDatabase = async (): Promise<void> => {
  const knex = connectToDatabase()
  logger.info('Seeding database')
  await knex.seed.run({ directory: path.join('src', 'database', 'seeds') })
  await knex.destroy()
}
