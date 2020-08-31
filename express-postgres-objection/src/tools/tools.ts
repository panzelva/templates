import { withKnex } from '../database/helpers'
import logger from '../utils/logger'

export const createSchema = withKnex(async (knex) => {
  await knex.schema.raw(`create schema if not exists "public"`)
  logger.info('Schema created')
})

export const dropSchema = withKnex(async (knex) => {
  await knex.schema.raw(`drop schema if exists "public" cascade`)
  logger.info('Schema dropped')
})

export const migrateDatabase = withKnex(async (knex) => {
  logger.info('Migrating database')
  await knex.migrate.latest()
})

export const seedDatabase = withKnex(async (knex) => {
  logger.info('Seeding database')
  await knex.seed.run()
})
