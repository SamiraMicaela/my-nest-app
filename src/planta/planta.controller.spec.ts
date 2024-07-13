import { Test, TestingModule } from '@nestjs/testing';
import { PlantaController } from './planta.controller';
import { PlantaService } from './planta.service';

describe('PlantaController', () => {
  let controller: PlantaController;
  let service: PlantaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantaController],
      providers: [PlantaService],
    }).compile();

    controller = module.get<PlantaController>(PlantaController);
    service = module.get<PlantaService>(PlantaService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debería retornar un array de plantas', () => {
    jest.spyOn(service, 'obtenerPlantas').mockImplementation(() => []);
    expect(controller.obtenerPlantas()).toEqual([]);
  });

  it('debería retornar una planta por id', () => {
    const planta = { id: 1, nombre: 'Rosa', especie: 'Rosae' };
    jest.spyOn(service, 'obtenerPlantaPorId').mockImplementation((id: number) => planta);
    expect(controller.obtenerPlantaPorId(1)).toEqual(planta);
  });

  it('debería agregar una nueva planta', () => {
    const planta = { id: 1, nombre: 'Tulipán', especie: 'Tulipa' };
    jest.spyOn(service, 'agregarPlanta').mockImplementation((nombre: string, especie: string) => planta);
    expect(controller.agregarPlanta('Tulipán', 'Tulipa')).toEqual(planta);
  });

  it('no debería encontrar una planta con un id inexistente', () => {
    jest.spyOn(service, 'obtenerPlantaPorId').mockImplementation((id: number) => undefined);
    expect(controller.obtenerPlantaPorId(999)).toBeUndefined();
  });
});
