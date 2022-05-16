import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('items').del()

  // Inserts seed entries
  await knex('items').insert([
    {
      name: 'Chicken Pastrami Salad',
      category_id: 1,
      quantity: 25,
      making_price: 50,
      selling_price: 75
    },
    {
      name: '1kg Tomahawk Strips',
      category_id: 2,
      quantity: 30,
      making_price: 60,
      selling_price: 120
    },
    {
      name: '0.5kg Tomahawk Strips',
      category_id: 2,
      quantity: 30,
      making_price: 30,
      selling_price: 60
    },
    {
      name: '350ml Cocacola',
      category_id: 1,
      quantity: 25,
      making_price: 2.5,
      selling_price: 10
    }
  ])
}
