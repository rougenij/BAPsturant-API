import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('order_items', (table) => {
    table.increments('item_order_id').primary()
    table.integer('order_id').unsigned()
    table.foreign('order_id').references('orders.order_id')
    table.integer('item_id').unsigned()
    table.foreign('item_id').references('items.item_id')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('order_items')
}
