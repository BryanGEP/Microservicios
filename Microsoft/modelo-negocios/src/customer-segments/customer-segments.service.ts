import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerSegmentDto } from './dto/create-customer-segment.dto';
import { UpdateCustomerSegmentDto } from './dto/update-customer-segment.dto';
import { v4 as UuidV4 } from 'uuid';
import { CustomerSegment } from './entities/customer-segment.entity';

@Injectable()
export class CustomerSegmentsService {

  private CustomerSegments:CustomerSegment[]=[];

  create(createCustomerSegmentDto: CreateCustomerSegmentDto) {
    const{name,description}=createCustomerSegmentDto;
    const newCustomerSegment=new CustomerSegment(UuidV4(),name,description??"");

    this.CustomerSegments.push(newCustomerSegment);
    return newCustomerSegment;
  }

  findAll() {
    return this.CustomerSegments;
  }

  findOne(id: string):CustomerSegment {
    const CustomerSegment=this.CustomerSegments.find(CustomerSegment=>CustomerSegment.id==id)
    if(!CustomerSegment){
      throw new NotFoundException(`CustomerSegment con el id ${id} no Existe`)
    }
    return CustomerSegment;
  }

  update(id: string, updateCustomerSegmentDto: UpdateCustomerSegmentDto) {
    const {id:__,name,description}=updateCustomerSegmentDto;
    const CustomerSegment=this.findOne(id);
    CustomerSegment.updateWith({name,description})
    console.log(CustomerSegment);

    return CustomerSegment;
  }

  remove(id: string):CustomerSegment {
    const CustomerSegment=this.findOne(id);
    this.CustomerSegments=this.CustomerSegments.filter(CustomerSegment=>CustomerSegment.id!=id);
    console.log(CustomerSegment);
    return CustomerSegment;
  }
}
