import { PartialType } from '@nestjs/mapped-types';
import { CreateLaboratorioAcDto } from './create-laboratorio-ac.dto';

export class UpdateLaboratorioAcDto extends PartialType(CreateLaboratorioAcDto) {}
