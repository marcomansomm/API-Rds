import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DepartamentoModule } from './departments/departamento.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartamentoService } from './departments/departamento.service';
import { EmployeeService } from './employee/employee.service';

@Module({
  imports: [DatabaseModule, DepartamentoModule, EmployeeModule],
  controllers: [],
  providers: [DepartamentoService, EmployeeService],
})
export class AppModule {}
