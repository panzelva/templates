import { createSchema, migrateDatabase, seedDatabase } from '../tools/tools'
import { startServer } from './server'
import env from './utils/env'

const start = async () => {
  // when developing, run migrations and seeds with yarn from command line
  // this is because nodemon will restart this process
  if (env.MIGRATIONS_ENABLED) {
    await createSchema()
    await migrateDatabase()
  }

  if (env.SEEDS_ENABLED) {
    await seedDatabase()
  }

  await startServer()
}

start()
