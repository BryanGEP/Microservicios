import { Injectable } from '@nestjs/common';
import { CreateControlcalidadDto } from './dto/create-controlcalidad.dto';
import { UpdateControlcalidadDto } from './dto/update-controlcalidad.dto';

@Injectable()
export class ControlcalidadService {
  create(createControlcalidadDto: CreateControlcalidadDto) {
    return 'This action adds a new controlcalidad';
  }

  findAll() {
    return `This action returns all controlcalidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} controlcalidad`;
  }

  update(id: number, updateControlcalidadDto: UpdateControlcalidadDto) {
    return `This action updates a #${id} controlcalidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} controlcalidad`;
  }
}
