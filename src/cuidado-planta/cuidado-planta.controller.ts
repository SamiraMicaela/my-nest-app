import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CuidadoPlantaService } from './cuidado-planta.service';

@Controller('cuidados')
export class CuidadoPlantaController {
  constructor(private readonly cuidadoPlantaService: CuidadoPlantaService) {}

  @Get()
  obtenerCuidados() {
    return this.cuidadoPlantaService.obtenerCuidados();
  }

  @Get(':plantaId')
  obtenerCuidadoPorPlantaId(@Param('plantaId') plantaId: number) {
    return this.cuidadoPlantaService.obtenerCuidadoPorPlantaId(plantaId);
  }

  @Post()
  agregarCuidado(@Body('plantaId') plantaId: number, @Body('cuidado') cuidado: string) {
    return this.cuidadoPlantaService.agregarCuidado(plantaId, cuidado);
  }
}
