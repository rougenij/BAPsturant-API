import ApiError from '@/utils/ApiError'
import logger from '@/utils/logger'
import Items from './items.model'
import bcrypt from 'bcrypt'

const allItems = async () => {
  const items = await Items.all()

  return items
}

export default { allItems }
