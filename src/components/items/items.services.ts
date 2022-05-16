import ApiError from '@/utils/ApiError'
import logger from '@/utils/logger'
import Items from './items.model'
import bcrypt from 'bcrypt'

const allItems = async () => {
  const items = await Items.all()

  return items
}

const singleItems = async (id) => {
  const items = await Items.single(id)
  return items
}

const itemsFromOrder = async (id) => {
  const items = await Items.itemsOfOrder(id)
  return items
}

export default { allItems, singleItems, itemsFromOrder }
