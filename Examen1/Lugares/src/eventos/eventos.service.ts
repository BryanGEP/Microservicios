import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class EventosService {
   private Eventos:Evento[]=[];

  create(createEventoDto: CreateEventoDto) {
    const {titulo,descripcion,fecha}=createEventoDto;
    const newEvento=new Evento(UuidV4(),titulo,descripcion,fecha);

    this.Eventos.push(newEvento);
    return newEvento;
  }

  findAll() {
    return this.Eventos;
  }

  findOne(id: string):Evento {
    const Evento=this.Eventos.find(Eventos=>Eventos.id==id);
    if(!Evento){
      throw new NotFoundException(`Evento con el id ${id} no Existe`)
    }
    return Evento;
  }

  update(id: string, updateEventoDto: UpdateEventoDto) {
    const {id:__,titulo,descripcion,fecha}=updateEventoDto;
    const Evento=this.findOne(id);
    Evento.updateWith({titulo,descripcion,fecha})
    console.log(Evento);
    return Evento;
  }

  remove(id: string) {
    const Evento=this.findOne(id);
    this.Eventos=this.Eventos.filter(Evento=>Evento.id!=id);
    console.log(Evento);
    return Evento;
  }
}
