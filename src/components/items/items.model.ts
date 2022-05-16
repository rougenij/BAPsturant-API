import logger from '@/utils/logger'
import db from '@db'

const all = () => db.select('*').from('items').first()

export default { all }
