import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RevenueStreamsService } from './revenue-streams.service';
import { CreateRevenueStreamDto } from './dto/create-revenue-stream.dto';
import { UpdateRevenueStreamDto } from './dto/update-revenue-stream.dto';

@Controller('revenue-streams')
export class RevenueStreamsController {
  constructor(private readonly revenueStreamsService: RevenueStreamsService) {}

  @Post()
  create(@Body() createRevenueStreamDto: CreateRevenueStreamDto) {
    return this.revenueStreamsService.create(createRevenueStreamDto);
  }

  @Get()
  findAll() {
    return this.revenueStreamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.revenueStreamsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateRevenueStreamDto: UpdateRevenueStreamDto) {
    return this.revenueStreamsService.update(id, updateRevenueStreamDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.revenueStreamsService.remove(id);
  }
}
