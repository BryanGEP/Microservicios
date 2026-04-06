import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { KeyActivitiesService } from './key-activities.service';
import { CreateKeyActivityDto } from './dto/create-key-activity.dto';
import { UpdateKeyActivityDto } from './dto/update-key-activity.dto';

@Controller('key-activities')
export class KeyActivitiesController {
  constructor(private readonly keyActivitiesService: KeyActivitiesService) {}

  @Post()
  create(@Body() createKeyActivityDto: CreateKeyActivityDto) {
    return this.keyActivitiesService.create(createKeyActivityDto);
  }

  @Get()
  findAll() {
    return this.keyActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.keyActivitiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateKeyActivityDto: UpdateKeyActivityDto) {
    return this.keyActivitiesService.update(id, updateKeyActivityDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.keyActivitiesService.remove(id);
  }
}
