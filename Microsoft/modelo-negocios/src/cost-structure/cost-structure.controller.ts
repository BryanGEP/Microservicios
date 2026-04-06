import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CostStructureService } from './cost-structure.service';
import { CreateCostStructureDto } from './dto/create-cost-structure.dto';
import { UpdateCostStructureDto } from './dto/update-cost-structure.dto';

@Controller('cost-structure')
export class CostStructureController {
  constructor(private readonly costStructureService: CostStructureService) {}

  @Post()
  create(@Body() createCostStructureDto: CreateCostStructureDto) {
    return this.costStructureService.create(createCostStructureDto);
  }

  @Get()
  findAll() {
    return this.costStructureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.costStructureService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateCostStructureDto: UpdateCostStructureDto) {
    return this.costStructureService.update(id, updateCostStructureDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.costStructureService.remove(id);
  }
}
