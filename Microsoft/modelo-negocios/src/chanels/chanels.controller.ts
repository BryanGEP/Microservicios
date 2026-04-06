import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ChanelsService } from './chanels.service';
import { CreateChanelDto } from './dto/create-chanel.dto';
import { UpdateChanelDto } from './dto/update-chanel.dto';

@Controller('chanels')
export class ChanelsController {
  constructor(private readonly chanelsService: ChanelsService) {}

  @Post()
  create(@Body() createChanelDto: CreateChanelDto) {
    return this.chanelsService.create(createChanelDto);
  }

  @Get()
  findAll() {
    return this.chanelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.chanelsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateChanelDto: UpdateChanelDto) {
    return this.chanelsService.update(id, updateChanelDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.chanelsService.remove(id);
  }
}
