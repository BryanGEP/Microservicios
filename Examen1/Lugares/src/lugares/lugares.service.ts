import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLugareDto } from './dto/create-lugare.dto';
import { UpdateLugareDto } from './dto/update-lugare.dto';
import { Lugare } from './entities/lugare.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class LugaresService {
  private Lugares:Lugare[]=[];

  create(createLugareDto: CreateLugareDto) {
    const {imagen,ruta,nombre,ubicacion}=createLugareDto;
    const newLugares=new Lugare(UuidV4(),imagen,ruta,nombre,ubicacion);

    this.Lugares.push(newLugares);

    return newLugares;
  }

  findAll() {
    return this.Lugares;
  }

  findOne(id: string):Lugare {
    const Lugares=this.Lugares.find(Lugares=>Lugares.id==id);
    if(!Lugares){
      throw new NotFoundException(`Lugar con el id ${id} no Existe`);
    }
    return Lugares;
  }

  update(id: string, updateLugareDto: UpdateLugareDto) {
    const {id:__,imagen,ruta,nombre,ubicacion}=updateLugareDto;
    const Lugares=this.findOne(id);
    Lugares.updateWith({imagen,ruta,nombre,ubicacion})
    console.log(Lugares);

    return Lugares;
  }

  remove(id: string) {
    const Lugares=this.findOne(id);
    this.Lugares=this.Lugares.filter(Lugares=>Lugares.id!=id);
    console.log(Lugares);
    return Lugares;
  }
}
