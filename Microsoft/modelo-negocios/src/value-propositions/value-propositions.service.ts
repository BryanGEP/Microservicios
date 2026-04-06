import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateValuePropositionDto } from './dto/create-value-proposition.dto';
import { UpdateValuePropositionDto } from './dto/update-value-proposition.dto';
import { ValueProposition } from './entities/value-proposition.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class ValuePropositionsService {

  private ValuePropositions:ValueProposition[]=[];

  create(createValuePropositionDto: CreateValuePropositionDto) {
    const{title,benefits}=createValuePropositionDto;
    const newValuePropositions=new ValueProposition(UuidV4(),title,benefits??"");

    this.ValuePropositions.push(newValuePropositions);

    return newValuePropositions;
  }

  findAll() {
    return this.ValuePropositions;
  }

  findOne(id: string):ValueProposition {
    const ValueProposition=this.ValuePropositions.find(ValuePropositions=>ValuePropositions.id==id)
    if(!ValueProposition){
      throw new NotFoundException(`ValueProposition con el id ${id} no Existe`);
    }
    return ValueProposition;
  }

  update(id: string, updateValuePropositionDto: UpdateValuePropositionDto) {
    const {id:__,title,benefits}=updateValuePropositionDto;
    const ValueProposition=this.findOne(id);
    ValueProposition.updateWith({title,benefits})
    console.log(ValueProposition);

    return ValueProposition;
  }

  remove(id: string):ValueProposition {
    const ValueProposition=this.findOne(id);
    this.ValuePropositions=this.ValuePropositions.filter(ValueProposition=>ValueProposition.id!=id);
    console.log(ValueProposition);
    return ValueProposition;
  }
}
