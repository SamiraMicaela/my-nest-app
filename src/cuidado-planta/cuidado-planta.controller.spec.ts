import { Test, TestingModule } from '@nestjs/testing';
import { CuidadoPlantaController } from './cuidado-planta.controller';
import { CuidadoPlantaService } from './cuidado-planta.service';

describe('CuidadoPlantaController', () => {
  let controller: CuidadoPlantaController;
  let service: CuidadoPlantaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuidadoPlantaController],
      providers: [CuidadoPlantaService],
    }).compile();

    controller = module.get<CuidadoPlantaController>(CuidadoPlantaController);
    service = module.get<CuidadoPlantaService>(CuidadoPlantaService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debería retornar un array de cuidados de plantas', () => {
    jest.spyOn(service, 'obtenerCuidados').mockImplementation(() => [
      { id: 1, plantaId: 1, cuidado: 'Regar una vez a la semana' },
      { id: 2, plantaId: 2, cuidado: 'Regar dos veces a la semana' },
    ]);
    expect(controller.obtenerCuidados()).toEqual([
      { id: 1, plantaId: 1, cuidado: 'Regar una vez a la semana' },
      { id: 2, plantaId: 2, cuidado: 'Regar dos veces a la semana' },
    ]);
  });

  it('debería retornar cuidados por planta id', () => {
    const cuidado = [{ id: 1, plantaId: 1, cuidado: 'Regar una vez a la semana' }];
    jest.spyOn(service, 'obtenerCuidadoPorPlantaId').mockImplementation((plantaId: number) => cuidado);
    expect(controller.obtenerCuidadoPorPlantaId(1)).toEqual(cuidado);
  });

  it('debería agregar un nuevo cuidado de planta', () => {
    const nuevoCuidado = { id: 3, plantaId: 1, cuidado: 'Podar mensualmente' };
    jest.spyOn(service, 'agregarCuidado').mockImplementation((plantaId: number, cuidado: string) => nuevoCuidado);
    expect(controller.agregarCuidado(1, 'Podar mensualmente')).toEqual(nuevoCuidado);
  });

  it('no debería encontrar cuidados para un id de planta inexistente', () => {
    jest.spyOn(service, 'obtenerCuidadoPorPlantaId').mockImplementation((plantaId: number) => []);
    expect(controller.obtenerCuidadoPorPlantaId(999)).toEqual([]);
  });
});
