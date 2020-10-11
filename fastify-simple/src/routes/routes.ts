import { FastifyPluginCallback, RouteHandlerMethod } from 'fastify'
import postsRoutes from './posts/postRoutes'

const getRoot: RouteHandlerMethod = async (request, reply) => {
  return 'hello world'
}

const routes: FastifyPluginCallback = async (fastify) => {
  fastify.get('/', getRoot)

  fastify.register(postsRoutes, { prefix: '/posts' })
}

export default routes
