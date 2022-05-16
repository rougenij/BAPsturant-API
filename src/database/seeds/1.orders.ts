import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('orders').del()

  // Inserts seed entries
  await knex('orders').insert([
    {
      total: 155,
      date: '2022-05-16',
      status: 'completed',
      revenue: 65,
      start_time: '2020-05-01T08:30:00.000Z',
      end_time: '2020-05-01T16:30:00.000Z',
      head_count: 3
    },
    {
      total: 375,
      date: '2022-05-10',
      status: 'completed',
      revenue: 190,
      start_time: '2020-05-01T08:30:00.000Z',
      end_time: '2020-05-01T16:30:00.000Z',
      head_count: 6
    }
  ])
}
