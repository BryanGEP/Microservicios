import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerRelationshipDto } from './dto/create-customer-relationship.dto';
import { UpdateCustomerRelationshipDto } from './dto/update-customer-relationship.dto';
import { v4 as UuidV4 } from 'uuid';
import { CustomerRelationship } from './entities/customer-relationship.entity';

@Injectable()
export class CustomerRelationshipService {

  private CustomerRelationship:CustomerRelationship[]=[];

  create(createCustomerRelationshipDto: CreateCustomerRelationshipDto) {
    const{relationshipType,strategy}=createCustomerRelationshipDto;
    const newCustomerRelationship=new CustomerRelationship(UuidV4(),relationshipType,strategy);
    this.CustomerRelationship.push(newCustomerRelationship);

    return newCustomerRelationship;
    
  }

  findAll() {
    return this.CustomerRelationship;
  }

  findOne(id: string):CustomerRelationship {
    const CustomerRelationship=this.CustomerRelationship.find(CustomerRelationship=>CustomerRelationship.id==id)
    if(!CustomerRelationship){
      throw new NotFoundException(`CustomerRelationship con el id ${id} no Existe`);
    }
    return CustomerRelationship;
  }

  update(id: string, updateCustomerRelationshipDto: UpdateCustomerRelationshipDto) {
    const {id:__,relationshipType,strategy}=updateCustomerRelationshipDto;
    const CustomerRelationship=this.findOne(id);
    CustomerRelationship.updateWith({relationshipType,strategy})
    console.log(CustomerRelationship);

    return CustomerRelationship;
  }

  remove(id: string):CustomerRelationship {
    const CustomerRelationship=this.findOne(id);
    this.CustomerRelationship=this.CustomerRelationship.filter(CustomerRelationship=>CustomerRelationship.id!=id);
    console.log(CustomerRelationship);
    return CustomerRelationship;
  }
}
