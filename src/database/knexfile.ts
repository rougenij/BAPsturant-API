import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })

import { databaseConf } from '../config'

const commonConnection = {
  host: databaseConf.host,
  user: databaseConf.user,
  password: databaseConf.password,
  database: databaseConf.database,
  charset: 'utf8'
}

const knexConfig = {
  development: {
    client: 'pg',
    connection: commonConnection,
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  production: {
    // might be a bug in the future, is postgresql a package here?
    client: 'postgresql',
    connection: {
      ...commonConnection,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      // add the set timezone to the afterCreate
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

export default knexConfig
