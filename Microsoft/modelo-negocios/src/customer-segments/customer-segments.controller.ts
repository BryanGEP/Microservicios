import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CustomerSegmentsService } from './customer-segments.service';
import { CreateCustomerSegmentDto } from './dto/create-customer-segment.dto';
import { UpdateCustomerSegmentDto } from './dto/update-customer-segment.dto';

@Controller('customer-segments')
export class CustomerSegmentsController {
  constructor(private readonly customerSegmentsService: CustomerSegmentsService) {}

  @Post()
  create(@Body() createCustomerSegmentDto: CreateCustomerSegmentDto) {
    return this.customerSegmentsService.create(createCustomerSegmentDto);
  }

  @Get()
  findAll() {
    return this.customerSegmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.customerSegmentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateCustomerSegmentDto: UpdateCustomerSegmentDto) {
    return this.customerSegmentsService.update(id, updateCustomerSegmentDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.customerSegmentsService.remove(id);
  }
}
