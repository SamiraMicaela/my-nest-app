import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantaService } from './planta/planta.service';
import { CuidadoPlantaService } from './cuidado-planta/cuidado-planta.service';
import { PlantaController } from './planta/planta.controller';
import { CuidadoPlantaController } from './cuidado-planta/cuidado-planta.controller';

@Module({
  imports: [],
  controllers: [AppController, PlantaController, CuidadoPlantaController],
  providers: [AppService, PlantaService, CuidadoPlantaService],
})
export class AppModule {}
