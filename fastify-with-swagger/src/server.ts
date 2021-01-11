import fastify from "fastify"
import fastifySwagger from "fastify-swagger"
import { itemRoutes } from "./items/itemRoutes"

export const createServer = () => {
  // Require the framework and instantiate it
  const server = fastify({ logger: false })

  // Adding swagger
  // This must be registered before all other routes
  server.register(fastifySwagger, {
    exposeRoute: true,
    mode: "dynamic",
  })

  // Declare a routes
  server.route({
    url: "/",
    method: "GET",
    handler: async () => {
      return { hello: "world" }
    },
  })

  // Register route plugins
  server.register(itemRoutes, { prefix: "items" })

  return server
}
