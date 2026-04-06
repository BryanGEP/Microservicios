import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { Noticia } from './entities/noticia.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class NoticiasService {

  private Noticias:Noticia[]=[];

  create(createNoticiaDto: CreateNoticiaDto) {
    const {titulo,descripcion,fecha_publicacion,fecha_duracion,imagenes}=createNoticiaDto;
    const NewNoticias=new Noticia(UuidV4(),titulo,descripcion,fecha_publicacion,fecha_duracion,imagenes)
    return createNoticiaDto;
  }

  findAll() {
    return this.Noticias;
  }

  findOne(id: string):Noticia {
    const Noticia=this.Noticias.find(Noticias=>Noticias,id==id);
    if(!Noticia){
      throw new NotFoundException( `Noticia con el id ${id} no Existe` );
    }
    return Noticia;
  }

  update(id: string, updateNoticiaDto: UpdateNoticiaDto) {
    const {id:__,titulo,descripcion,fecha_publicacion,fecha_duracion,imagenes}=updateNoticiaDto;
    const Noticia=this.findOne(id);
    Noticia.updateWith({titulo,descripcion,fecha_publicacion,fecha_duracion,imagenes})
    console.log(Noticia);

    return Noticia;
  }

  remove(id: string):Noticia {
    const Noticia=this.findOne(id);
    this.Noticias=this.Noticias.filter(Noticia=>Noticia.id!=id);
    console.log(Noticia);
    return Noticia;
  }
}
