import express from 'express'
import 'express-async-errors'
import { Server } from 'http'
import env from './utils/env'
import logger from './utils/logger'
import { getRoutes } from './routes'

export const startServer = (): Promise<Server> => {
  const app = express()

  app.use('/api', getRoutes())

  return new Promise((resolve) => {
    const server = app.listen(env.PORT, () => {
      logger.info(`Listening on port http://localhost:${env.PORT}`)
      resolve(server)
    })
  })
}
