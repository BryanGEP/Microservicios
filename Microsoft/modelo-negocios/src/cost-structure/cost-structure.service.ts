import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCostStructureDto } from './dto/create-cost-structure.dto';
import { UpdateCostStructureDto } from './dto/update-cost-structure.dto';
import { CostStructure } from './entities/cost-structure.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class CostStructureService {

  private CostStructure:CostStructure[]=[];

  create(createCostStructureDto: CreateCostStructureDto) {
    const {costName,amount}=createCostStructureDto;
    const newCostStructure=new CostStructure(UuidV4(),costName,amount);

    this.CostStructure.push(newCostStructure);
    
    return newCostStructure;
  }

  findAll() {
    return this.CostStructure;
  }

  findOne(id: string):CostStructure {
    const CostStructure=this.CostStructure.find(CostStructure=>CostStructure.id==id)
    if(!CostStructure){
      throw new NotFoundException( `CsostEstructure con el id ${id} no Existe` );
    }
    return CostStructure;
  }

  update(id: string, updateCostStructureDto: UpdateCostStructureDto) {
    const {id:__,costName,amount}=updateCostStructureDto;
    const CostStructure=this.findOne(id);
    CostStructure.updateWith({costName,amount})
    console.log(CostStructure);

    return CostStructure;
  }

  remove(id: string):CostStructure {
    const CostStructure=this.findOne(id);
    this.CostStructure=this.CostStructure.filter(CostStructure=>CostStructure.id!=id);
    console.log(CostStructure);
    return CostStructure;
  }
}
