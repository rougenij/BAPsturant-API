import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('order_items').del()
  // Inserts seed entries
  await knex('order_items').insert([
    { order_id: 1, item_id: 1 },
    { order_id: 1, item_id: 3 },
    { order_id: 1, item_id: 4 },
    { order_id: 1, item_id: 4 },
    { order_id: 2, item_id: 2 },
    { order_id: 2, item_id: 2 },
    { order_id: 2, item_id: 4 },
    { order_id: 2, item_id: 4 },
    { order_id: 2, item_id: 4 },
    { order_id: 2, item_id: 4 },
    { order_id: 2, item_id: 4 },
    { order_id: 2, item_id: 4 },
    { order_id: 2, item_id: 1 }
  ])
}
