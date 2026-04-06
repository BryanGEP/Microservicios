import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChanelDto } from './dto/create-chanel.dto';
import { UpdateChanelDto } from './dto/update-chanel.dto';
import { channel } from 'node:diagnostics_channel';
import { Chanel } from './entities/chanel.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class ChanelsService {

  private channels:Chanel[]=[];

  create(createChanelDto: CreateChanelDto) {
    const {type,details}=createChanelDto;
    const newChanel=new Chanel(UuidV4(),type,details);
    this.channels.push(newChanel);
    return newChanel;
    
  }

  findAll() {
    return this.channels;
  }

  findOne(id: string):Chanel {
    const chanel=this.channels.find(chanel=>chanel.id==id)
    if(!chanel){
      throw new NotFoundException(`Canal con el id ${id} no Existe`)
    }
    return chanel;
  }

  update(id: string, updateChanelDto: UpdateChanelDto) {
    const {id:__,type,details}=updateChanelDto;
    const Chanel=this.findOne(id);
    Chanel.updateWith({type,details})
    console.log(Chanel);

    return Chanel;
  }

  remove(id: string):Chanel {
    const Chanel=this.findOne(id);
    this.channels=this.channels.filter(Chanel=>Chanel.id!=id);
    console.log(Chanel);
    return Chanel;
  }
}
