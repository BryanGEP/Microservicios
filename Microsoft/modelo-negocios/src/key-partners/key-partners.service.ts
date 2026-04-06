import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKeyPartnerDto } from './dto/create-key-partner.dto';
import { UpdateKeyPartnerDto } from './dto/update-key-partner.dto';
import { v4 as UuidV4 } from 'uuid';
import { KeyPartner } from './entities/key-partner.entity';

@Injectable()
export class KeyPartnersService {

  private KeyPartners:KeyPartner[]=[];

  create(createKeyPartnerDto: CreateKeyPartnerDto) {
    const{partnerName,collaborationType}=createKeyPartnerDto;
    const newKeyPartner=new KeyPartner(UuidV4(),partnerName,collaborationType);

    this.KeyPartners.push(newKeyPartner);
    return newKeyPartner;
  }

  findAll() {
    return this.KeyPartners;
  }

  findOne(id: string):KeyPartner {
    const KeyPartner=this.KeyPartners.find(KeyPartners=>KeyPartners.id==id)
    if(!KeyPartner){
      throw new NotFoundException(`KeyPartner con el id ${id} no Existe`)
    }
    return KeyPartner;
  }

  update(id: string, updateKeyPartnerDto: UpdateKeyPartnerDto) {
    const {id:__,partnerName,collaborationType}=updateKeyPartnerDto;
    const KeyPartner=this.findOne(id);
    KeyPartner.updateWith({partnerName,collaborationType})
    console.log(KeyPartner);

    return KeyPartner;
  }

  remove(id: string):KeyPartner {
    const KeyPartner=this.findOne(id);
    this.KeyPartners=this.KeyPartners.filter(KeyPartner=>KeyPartner.id!=id);
    console.log(KeyPartner);
    return KeyPartner;
  }
}
