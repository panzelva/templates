import { createServer } from "./server"

const server = createServer()

// Run the server!
server.listen(4000, (err, address) => {
  if (err) {
    server.log.error({ ...err })
    process.exit(1)
  }

  server.log.info(`server listening on ${address}`)
})
