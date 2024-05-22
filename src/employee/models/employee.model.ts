import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Employee extends Model {
  @Column
  matricula: number;

  @Column
  firstName: string;

  @Column
  familyName: string;

  @Column
  salary: number;
}
