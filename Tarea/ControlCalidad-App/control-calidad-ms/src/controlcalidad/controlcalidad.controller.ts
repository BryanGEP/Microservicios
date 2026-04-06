import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlcalidadService } from './controlcalidad.service';
import { CreateControlcalidadDto } from './dto/create-controlcalidad.dto';
import { UpdateControlcalidadDto } from './dto/update-controlcalidad.dto';

@Controller('controlcalidad')
export class ControlcalidadController {
  constructor(private readonly controlcalidadService: ControlcalidadService) {}

  @Post()
  create(@Body() createControlcalidadDto: CreateControlcalidadDto) {
    return this.controlcalidadService.create(createControlcalidadDto);
  }

  @Get()
  findAll() {
    return this.controlcalidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlcalidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlcalidadDto: UpdateControlcalidadDto) {
    return this.controlcalidadService.update(+id, updateControlcalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlcalidadService.remove(+id);
  }
}
