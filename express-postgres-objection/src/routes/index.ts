import express, { Router } from 'express'
import { getMathRoutes } from './math'

export const getRoutes = (): Router => {
  // create a router for all the routes of our app
  const router = express.Router()
  router.use('/math', getMathRoutes())
  // any additional routes would go here

  return router
}
