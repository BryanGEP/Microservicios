import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { ControlService } from './control.service';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { PaginationDto } from 'src/common';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller('control')
export class ControlController {
  constructor(private readonly controlService: ControlService) {}

  @Post()
  @MessagePattern({cmd:'create_control'})
  create(@Payload() createControlDto: CreateControlDto) {
    return this.controlService.create(createControlDto);
  }

  @Get()
  @MessagePattern({cmd:'find_all_control'})
  findAll(@Payload() paginationDto:PaginationDto) {
    return this.controlService.findAll(paginationDto);
  }

  @Get(':id')
  @MessagePattern({cmd:'find_one_control'})
  findOne(@Payload('id',ParseIntPipe) id: number) {
    return this.controlService.findOne(id);
  }

  @Patch(':id')
  @MessagePattern({cmd:'update_control'})
  update(@Payload() updateControlDto: UpdateControlDto) {
    return this.controlService.update(updateControlDto.id, updateControlDto);
  }

  @Delete(':id')
  @MessagePattern({cmd:'delete_control'})
  remove(@Payload('id',ParseIntPipe) id: number) {
    return this.controlService.remove(id);
  }
}
