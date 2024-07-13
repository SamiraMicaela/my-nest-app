import { Test, TestingModule } from '@nestjs/testing';
import { CuidadoPlantaService } from './cuidado-planta.service';

describe('CuidadoPlantaService', () => {
  let service: CuidadoPlantaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuidadoPlantaService],
    }).compile();

    service = module.get<CuidadoPlantaService>(CuidadoPlantaService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería retornar un array de cuidados de plantas', () => {
    expect(service.obtenerCuidados()).toEqual([
      { id: 1, plantaId: 1, cuidado: 'Regar una vez a la semana' },
      { id: 2, plantaId: 2, cuidado: 'Regar dos veces a la semana' },
    ]);
  });

  it('debería retornar cuidados por planta id', () => {
    expect(service.obtenerCuidadoPorPlantaId(1)).toEqual([{ id: 1, plantaId: 1, cuidado: 'Regar una vez a la semana' }]);
  });

  it('debería agregar un nuevo cuidado de planta', () => {
    expect(service.agregarCuidado(1, 'Podar mensualmente')).toEqual({ id: 3, plantaId: 1, cuidado: 'Podar mensualmente' });
  });

  it('no debería encontrar cuidados para un id de planta inexistente', () => {
    expect(service.obtenerCuidadoPorPlantaId(999)).toEqual([]);
  });
});
