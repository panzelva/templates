import { BaseModel } from './BaseModel'

export default class User extends BaseModel {
  public id: string

  static get tableName(): string {
    return 'user'
  }
}
