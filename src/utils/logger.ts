import winston from 'winston'

import { createLogger, format, transports } from 'winston'

const { combine, timestamp, prettyPrint } = format

const errorStackTracerFormat = winston.format((info) => {
  if (info.meta && info.meta instanceof Error) {
    info.stack = info.meta.stack
  }

  return info
})

const logger = createLogger({
  level: 'info',
  defaultMeta: { server: 'airbnb-crew' },
  format: combine(errorStackTracerFormat(), timestamp(), prettyPrint()),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/info.log', level: 'info' }),
    new transports.File({ filename: 'logs/debug.log', level: 'debug' })
  ]
})

export default logger
