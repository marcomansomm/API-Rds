import { Sequelize } from 'sequelize-typescript';
import { Departamento } from '../departments/models/Departamento.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'database-mmms3-jggfm.c7oqii0ua25f.us-west-2.rds.amazonaws.com',
        port: 3306,
        username: 'admin',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([Departamento]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
