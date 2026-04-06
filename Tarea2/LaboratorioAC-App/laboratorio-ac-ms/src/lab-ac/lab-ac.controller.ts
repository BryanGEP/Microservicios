import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { LabAcService } from './lab-ac.service';
import { CreateLabAcDto } from './dto/create-lab-ac.dto';
import { UpdateLabAcDto } from './dto/update-lab-ac.dto';
import { PaginationDto } from 'src/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('lab-ac')
export class LabAcController {
  constructor(private readonly labAcService: LabAcService) {}

  @Post()
  @MessagePattern({cmd:'create_lab'})
  create(@Payload() createLabAcDto: CreateLabAcDto) {
    return this.labAcService.create(createLabAcDto);
  }

  @Get()
  @MessagePattern({cmd:'find_all_lab'})
  findAll(@Payload() paginationDto:PaginationDto) {
    return this.labAcService.findAll(paginationDto);
  }

  @Get(':id')
  @MessagePattern({cmd:'find_one_lab'})
  findOne(@Payload('id',ParseIntPipe) id: number) {
    return this.labAcService.findOne(id);
  }

  @Patch(':id')
  @MessagePattern({cmd:'update_lab'})
  update(@Payload() updateLabAcDto: UpdateLabAcDto) {
    return this.labAcService.update(updateLabAcDto.id, updateLabAcDto);
  }

  @Delete(':id')
  @MessagePattern({cmd:'delete_lab'})
  remove(@Payload('id',ParseIntPipe) id: number) {
    return this.labAcService.remove(id);
  }
}
