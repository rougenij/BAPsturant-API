import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orders', (table) => {
    table.increments('order_id').primary()
    table.integer('total')
    table.date('date').notNullable()
    table.enu('status', ['canceled', 'pending', 'completed'])
    table.integer('revenue')
    table.timestamp('start_time').notNullable()
    table.timestamp('end_time')
    table.integer('head_count').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('orders')
}
