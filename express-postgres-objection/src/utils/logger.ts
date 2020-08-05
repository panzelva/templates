import { createLogger, format, transports } from 'winston'

const { combine, timestamp, printf, splat, colorize } = format

const formatter = printf(({ level, message, timestamp: ts }) => `${ts} [${level}] ${message}`)
const baseFormat = combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), splat(), formatter)

const logger = createLogger({
  level: 'info',
  format: baseFormat,
  transports: [new transports.Console({ format: combine(colorize(), baseFormat) })],
})

export default logger
