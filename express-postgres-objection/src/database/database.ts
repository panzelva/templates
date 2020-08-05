import Knex from 'knex'
import { knexSnakeCaseMappers, Model } from 'objection'
import env from '../utils/env'

const config = {
  client: 'pg',
  connection: {
    host: env.PG_HOST,
    port: env.PG_PORT,
    database: env.PG_DATABASE,
    user: env.PG_USER,
    password: env.PG_PASS,
  },
  ...knexSnakeCaseMappers(),
  debug: false,
}

export const connectToDatabase = (): Knex => {
  const knex = Knex(config)
  Model.knex(knex)
  return knex
}
