import { Inject, Injectable } from '@nestjs/common';
import { Departamento } from './models/departamento.model';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DepartamentoService {
  constructor(@Inject('SEQUELIZE') private readonly sequelize: Sequelize) {}

  async findAll(): Promise<any> {
    const [results, metadata] = await this.sequelize.query(
      'SELECT * FROM Departamento',
    );
    return results;
  }
}
