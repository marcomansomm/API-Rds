import { Sequelize } from 'sequelize-typescript';

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
        database: 'database-mmms3-jggfm',
      });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
