import { Module } from '@nestjs/common';
import { LugaresModule } from './lugares/lugares.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NoticiasModule } from './noticias/noticias.module';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [LugaresModule, UsuariosModule, NoticiasModule, EventosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
