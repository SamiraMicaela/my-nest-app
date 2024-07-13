import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlantaService } from './planta.service';

@Controller('plantas')
export class PlantaController {
  constructor(private readonly plantaService: PlantaService) {}

  @Get()
  obtenerPlantas() {
    return this.plantaService.obtenerPlantas();
  }

  @Get(':id')
  obtenerPlantaPorId(@Param('id') id: number) {
    return this.plantaService.obtenerPlantaPorId(id);
  }

  @Post()
  agregarPlanta(@Body('nombre') nombre: string, @Body('especie') especie: string) {
    return this.plantaService.agregarPlanta(nombre, especie);
  }
}
