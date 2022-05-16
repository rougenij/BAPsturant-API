const axios = require('axios')
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import compression from 'compression'
import httpStatus from 'http-status'
import session from 'express-session'
import db from '@db'
import knexSessionConnect from 'connect-session-knex'
import { errorHandler, errorConverter } from './middlewares/error'
import routers from './components'
import ApiError from './utils/ApiError'
import { isDev } from './config'

require('dotenv').config()

const app = express()

const KnexSessionStore = knexSessionConnect(session)
const sessionStore = new KnexSessionStore({
  knex: db,
  tablename: 'sessions',
  createtable: true
  // clearInterval: 1000 * 60 * 60
})

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)
// limit amount of requests per minute to avoid DDoS
app.use(
  rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: isDev ? 99999 : 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable the `X-RateLimit-*` headers
  })
)
app.use(
  helmet({
    // we needed to add this, so that the iframe for documents would work
    contentSecurityPolicy: false
  })
)

app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/items', routers.items)

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

// convert error to ApiError, if needed
app.use(errorConverter)

// handle error
app.use(errorHandler)

export default app
