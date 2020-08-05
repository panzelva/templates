import { createSchema, migrateDatabase } from '../tools/tools'
import { startServer } from './server'
import env from './utils/env'

const start = async () => {
  // when developing, run migrations and seeds with yarn from command line
  // this is because nodemon will restart this process
  if (env.RUN_MIGRATIONS) {
    await createSchema()
    await migrateDatabase()
  }

  await startServer()
}

start()
