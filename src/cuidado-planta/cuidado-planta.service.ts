import { Injectable } from '@nestjs/common';

@Injectable()
export class CuidadoPlantaService {
  private cuidadosPlantas = [
    { id: 1, plantaId: 1, cuidado: 'Regar una vez a la semana' },
    { id: 2, plantaId: 2, cuidado: 'Regar dos veces a la semana' },
  ];

  obtenerCuidados(): any[] {
    return this.cuidadosPlantas;
  }

  obtenerCuidadoPorPlantaId(plantaId: number): any[] {
    return this.cuidadosPlantas.filter(cuidado => cuidado.plantaId === plantaId);
  }

  agregarCuidado(plantaId: number, cuidado: string): any {
    const nuevoCuidado = { id: this.cuidadosPlantas.length + 1, plantaId, cuidado };
    this.cuidadosPlantas.push(nuevoCuidado);
    return nuevoCuidado;
  }
}
