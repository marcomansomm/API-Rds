import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class EmployeeService {
  constructor(@Inject('SEQUELIZE') private readonly sequelize: Sequelize) {}

  async findAll() {
    const [results, metadata] = await this.sequelize.query(
      'SELECT * FROM Empregado',
    );
    return results;
  }
}
