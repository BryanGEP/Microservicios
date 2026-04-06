import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LaboratorioAcService } from './laboratorio-ac.service';
import { CreateLaboratorioAcDto } from './dto/create-laboratorio-ac.dto';
import { UpdateLaboratorioAcDto } from './dto/update-laboratorio-ac.dto';

@Controller('laboratorio-ac')
export class LaboratorioAcController {
  constructor(private readonly laboratorioAcService: LaboratorioAcService) {}

  @Post()
  create(@Body() createLaboratorioAcDto: CreateLaboratorioAcDto) {
    return this.laboratorioAcService.create(createLaboratorioAcDto);
  }

  @Get()
  findAll() {
    return this.laboratorioAcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laboratorioAcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLaboratorioAcDto: UpdateLaboratorioAcDto) {
    return this.laboratorioAcService.update(+id, updateLaboratorioAcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laboratorioAcService.remove(+id);
  }
}
