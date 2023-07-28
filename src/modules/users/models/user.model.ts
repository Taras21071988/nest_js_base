import { Model, Table, Column } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  firstName: string

  @Column
  username: string

  @Column
  login: string

  @Column
  password: string
}
