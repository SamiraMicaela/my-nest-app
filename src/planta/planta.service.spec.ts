import { Test, TestingModule } from '@nestjs/testing';
import { PlantaService } from './planta.service';

describe('PlantaService', () => {
  let service: PlantaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantaService],
    }).compile();

    service = module.get<PlantaService>(PlantaService);
  });

  it('deberia retornar todas las plantas', () => {
    const plantas = service.obtenerPlantas();
    expect(plantas).toEqual([]);
  });

  it('deberia mostrar nuevas plantas', () => {
    const nuevaPlanta = service.agregarPlanta('Rosa', 'Flor');
    expect(nuevaPlanta).toHaveProperty('id');
    expect(nuevaPlanta.nombre).toBe('Rosa');
    expect(nuevaPlanta.especie).toBe('Flor');
  });

  it('deberia retornar plantas por ID', () => {
    const nuevaPlanta = service.agregarPlanta('Tulipán', 'Flor');
    const planta = service.obtenerPlantaPorId(nuevaPlanta.id);
    expect(planta).toEqual(nuevaPlanta);
  });

  it('no debería encontrar una planta con un id inexistente', () => {
    service.agregarPlanta('Rosa', 'Rosae');
    expect(service.obtenerPlantaPorId(999)).toBeUndefined();
  });
});
