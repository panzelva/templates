import express, { Router, Handler } from 'express'

// A function to get the routes.
// That way all the route definitions are in one place which I like.
// This is the only thing that's exported
export const getMathRoutes = (): Router => {
  const router = express.Router()
  router.get('/add', add)
  router.get('/subtract', subtract)
  return router
}

// all the controller and utility functions here:
const add: Handler = async (req, res) => {
  const sum = Number(req.query.a) + Number(req.query.c)
  res.send(sum.toString())
}

const subtract: Handler = async (req, res) => {
  const difference = Number(req.query.a) - Number(req.query.b)
  res.send(difference.toString())
}
