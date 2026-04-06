import { Injectable } from '@nestjs/common';
import { CreateLaboratorioAcDto } from './dto/create-laboratorio-ac.dto';
import { UpdateLaboratorioAcDto } from './dto/update-laboratorio-ac.dto';

@Injectable()
export class LaboratorioAcService {
  create(createLaboratorioAcDto: CreateLaboratorioAcDto) {
    return 'This action adds a new laboratorioAc';
  }

  findAll() {
    return `This action returns all laboratorioAc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laboratorioAc`;
  }

  update(id: number, updateLaboratorioAcDto: UpdateLaboratorioAcDto) {
    return `This action updates a #${id} laboratorioAc`;
  }

  remove(id: number) {
    return `This action removes a #${id} laboratorioAc`;
  }
}
