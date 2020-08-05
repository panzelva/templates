import { BaseModel } from './common/baseModel'

export default class User extends BaseModel {
  public id: string

  static get tableName(): string {
    return 'user'
  }
}
