import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentoController } from './Departamento.controller';
import { DepartamentoService } from './Departamento.service';

describe('DepartamentoController', () => {
  let controller: DepartamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartamentoController],
      providers: [DepartamentoService],
    }).compile();

    controller = module.get<DepartamentoController>(DepartamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
