import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class UsuariosService {

  private Usuarios:Usuario[]=[];
  
  create(createUsuarioDto: CreateUsuarioDto) {
    const {nombre,nc,carrera}=createUsuarioDto;
    const newUsuario=new Usuario(nombre,nc,carrera,UuidV4());

    this.Usuarios.push(newUsuario);
    console.log(this.Usuarios)
    return newUsuario;
  }

  findAll() {
    return this.Usuarios;
  }

  findOne(id: string):Usuario {
    const Usuario=this.Usuarios.find(Usuario=>Usuario.id==id);
    if(!Usuario){
      throw new NotFoundException(`Usuario con el id ${id} no Existe` )
    }
    return Usuario;
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const {id:__,nombre,nc,carrera}=updateUsuarioDto;
    const Usuario=this.findOne(id);
    Usuario.updateWith({nombre,nc,carrera})
    console.log(Usuario);

    return Usuario;
  }

  remove(id: string):Usuario {
    const Usuario=this.findOne(id);
    this.Usuarios=this.Usuarios.filter(Usuario=>Usuario.id!=id);
    console.log(Usuario);
    return Usuario;
  }
}
