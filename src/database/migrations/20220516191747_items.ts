import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('items', (table) => {
    table.increments('item_id').primary()
    table.string('name').notNullable()
    table.integer('category_id').unsigned()
    table.foreign('category_id').references('categories.category_id')
    table.integer('quantity').notNullable()
    table.double('making_price').notNullable()
    table.double('selling_price').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('items')
}
