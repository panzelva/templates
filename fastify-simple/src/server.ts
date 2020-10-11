import fastify from 'fastify'
import routes from './routes/routes'

const server = fastify({ logger: true })

server.register(routes)

export const startServer = async () => {
  try {
    await server.listen(3000, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }

  return server
}
