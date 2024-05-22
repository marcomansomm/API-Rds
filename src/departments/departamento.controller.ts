import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartamentoService } from './departamento.service';

@Controller('departments')
export class DepartamentoController {
  constructor(private readonly DepartamentoService: DepartamentoService) {}

  @Get()
  findAll() {
    return this.DepartamentoService.findAll();
  }
}
