import logger from '@/utils/logger'
import db from '@db'

const all = () => db.select('*').from('items')
const single = (id) => db.select('*').from('items').where('item_id', id).first()
const itemsOfOrder = (orderId) =>
  db
    .select('*')
    .from('items')
    .innerJoin('order_items', 'items.item_id', '=', 'order_items.item_id')
    .where('order_items.order_id', orderId)

export default { all, single, itemsOfOrder }
