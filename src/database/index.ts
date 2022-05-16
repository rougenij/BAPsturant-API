import { environment } from '../config'
import knex from 'knex'
import knexConfig from './knexfile'

const config = knexConfig[environment]

const db = knex(config)

export default db
