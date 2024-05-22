import { Sequelize } from 'sequelize-typescript';
import { Departamento } from '../departments/models/Departamento.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'nest',
      });
      sequelize.addModels([Departamento]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
