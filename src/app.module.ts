import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'seu-usuario',
      password: 'sua-senha',
      database: 'seu-banco-de-dados',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Em produção, use migrations em vez de synchronize: true
    }),
    UsersModule,
  ],
})
export class AppModule {}
