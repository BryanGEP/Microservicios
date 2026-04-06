import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRevenueStreamDto } from './dto/create-revenue-stream.dto';
import { UpdateRevenueStreamDto } from './dto/update-revenue-stream.dto';
import { RevenueStream } from './entities/revenue-stream.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class RevenueStreamsService {

  private RevenueStreams:RevenueStream[]=[];

  create(createRevenueStreamDto: CreateRevenueStreamDto) {
    const{source,amount}=createRevenueStreamDto;
    const newRevenueStream=new RevenueStream(UuidV4(),source,amount);

    this.RevenueStreams.push(newRevenueStream);

    return newRevenueStream;
  }

  findAll() {
    return this.RevenueStreams;
  }

  findOne(id: string):RevenueStream {
    const RevenueStream=this.RevenueStreams.find(RevenueStreams=>RevenueStreams.id==id)
    if(!RevenueStream){
      throw new NotFoundException(`RevenueStream con el id ${id} no Existe`)
    }
    return RevenueStream;
  }

  update(id: string, updateRevenueStreamDto: UpdateRevenueStreamDto) {
    const {id:__,source,amount}=updateRevenueStreamDto;
    const RevenueStream=this.findOne(id);
    RevenueStream.updateWith({source,amount})
    console.log(RevenueStream);

    return RevenueStream;
  }

  remove(id: string):RevenueStream {
    const RevenueStream=this.findOne(id);
    this.RevenueStreams=this.RevenueStreams.filter(RevenueStream=>RevenueStream.id!=id);
    console.log(RevenueStream);
    return RevenueStream;
  }
}
