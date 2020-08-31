import { connectToDatabase } from './database/database'
import { startServer } from './server'

const start = async () => {
  connectToDatabase()
  await startServer()
}

start()
