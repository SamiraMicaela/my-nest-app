import { Injectable } from '@nestjs/common';

@Injectable()
export class PlantaService {
  private plantas = [];

  obtenerPlantas() {
    return this.plantas;
  }

  obtenerPlantaPorId(id: number) {
    return this.plantas.find(planta => planta.id === id);
  }

  agregarPlanta(nombre: string, especie: string) {
    const nuevaPlanta = { id: this.plantas.length + 1, nombre, especie };
    this.plantas.push(nuevaPlanta);
    return nuevaPlanta;
  }
}
