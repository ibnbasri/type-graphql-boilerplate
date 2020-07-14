import {
  Model,
  Column,
  Table,
  BelongsToMany,
  Scopes,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

export class Users extends Model<Users> {}
