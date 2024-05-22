import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table
export class Departamento extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  codigo: number;

  @Column(DataType.STRING)
  nome: string;

  @Column(DataType.STRING)
  UF: string;
}
