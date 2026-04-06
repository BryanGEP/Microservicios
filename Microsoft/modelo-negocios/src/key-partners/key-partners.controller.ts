import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { KeyPartnersService } from './key-partners.service';
import { CreateKeyPartnerDto } from './dto/create-key-partner.dto';
import { UpdateKeyPartnerDto } from './dto/update-key-partner.dto';

@Controller('key-partners')
export class KeyPartnersController {
  constructor(private readonly keyPartnersService: KeyPartnersService) {}

  @Post()
  create(@Body() createKeyPartnerDto: CreateKeyPartnerDto) {
    return this.keyPartnersService.create(createKeyPartnerDto);
  }

  @Get()
  findAll() {
    return this.keyPartnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.keyPartnersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateKeyPartnerDto: UpdateKeyPartnerDto) {
    return this.keyPartnersService.update(id, updateKeyPartnerDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.keyPartnersService.remove(id);
  }
}
