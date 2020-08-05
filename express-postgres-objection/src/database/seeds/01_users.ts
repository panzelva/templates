import * as Knex from 'knex'
import User from '../models/user'

const data = [
  {
    id: '6b0139b6-482a-4b11-8d98-ec42c44f31bf',
  },
  {
    id: '503e95b4-64c0-4fd5-942f-946b8480284b',
  },
  {
    id: '67926e9e-77b8-4412-8d3a-50cad6fb7563',
  },
  {
    id: 'a70e7497-9c16-4a29-b62e-aef322406f6f',
  },
]

export async function seed(knex: Knex): Promise<void> {
  await knex(User.tableName).del()
  await knex(User.tableName).insert(data)
}
