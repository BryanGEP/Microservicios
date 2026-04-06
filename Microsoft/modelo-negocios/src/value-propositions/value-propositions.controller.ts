import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ValuePropositionsService } from './value-propositions.service';
import { CreateValuePropositionDto } from './dto/create-value-proposition.dto';
import { UpdateValuePropositionDto } from './dto/update-value-proposition.dto';

@Controller('value-propositions')
export class ValuePropositionsController {
  constructor(private readonly valuePropositionsService: ValuePropositionsService) {}

  @Post()
  create(@Body() createValuePropositionDto: CreateValuePropositionDto) {
    return this.valuePropositionsService.create(createValuePropositionDto);
  }

  @Get()
  findAll() {
    return this.valuePropositionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.valuePropositionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateValuePropositionDto: UpdateValuePropositionDto) {
    return this.valuePropositionsService.update(id, updateValuePropositionDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.valuePropositionsService.remove(id);
  }
}
