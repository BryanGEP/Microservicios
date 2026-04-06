import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CustomerRelationshipService } from './customer-relationship.service';
import { CreateCustomerRelationshipDto } from './dto/create-customer-relationship.dto';
import { UpdateCustomerRelationshipDto } from './dto/update-customer-relationship.dto';

@Controller('customer-relationship')
export class CustomerRelationshipController {
  constructor(private readonly customerRelationshipService: CustomerRelationshipService) {}

  @Post()
  create(@Body() createCustomerRelationshipDto: CreateCustomerRelationshipDto) {
    return this.customerRelationshipService.create(createCustomerRelationshipDto);
  }

  @Get()
  findAll() {
    return this.customerRelationshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.customerRelationshipService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateCustomerRelationshipDto: UpdateCustomerRelationshipDto) {
    return this.customerRelationshipService.update(id, updateCustomerRelationshipDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.customerRelationshipService.remove(id);
  }
}
