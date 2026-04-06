import { PartialType } from '@nestjs/mapped-types';
import { CreateControlcalidadDto } from './create-controlcalidad.dto';

export class UpdateControlcalidadDto extends PartialType(CreateControlcalidadDto) {}
