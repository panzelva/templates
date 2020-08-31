import { Model } from 'objection'

export class BaseModel extends Model {
  public createdAt: Date
  public updatedAt: Date
}
