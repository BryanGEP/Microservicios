import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKeyActivityDto } from './dto/create-key-activity.dto';
import { UpdateKeyActivityDto } from './dto/update-key-activity.dto';
import { v4 as UuidV4 } from 'uuid';
import { KeyActivity } from './entities/key-activity.entity';

@Injectable()
export class KeyActivitiesService {

  private KeyActivities:KeyActivity[]=[];

  create(createKeyActivityDto: CreateKeyActivityDto) {
    const {activityName,description}=createKeyActivityDto;
    const newKeyActivity=new KeyActivity(UuidV4(),activityName,description);

    this.KeyActivities.push(newKeyActivity);
    return newKeyActivity;
  }

  findAll() {
    return this.KeyActivities;
  }

  findOne(id: string):KeyActivity {
    const KeyActivity=this.KeyActivities.find(KeyActivities=>KeyActivities.id==id)
    if(!KeyActivity){
      throw new NotFoundException(`KeyActivity con el id ${id} no Existe`)
    }
    return KeyActivity;
  }

  update(id: string, updateKeyActivityDto: UpdateKeyActivityDto) {
    const {id:__,activityName,description}=updateKeyActivityDto;
    const KeyActivities=this.findOne(id);
    KeyActivities.updateWith({activityName,description})
    console.log(KeyActivities);

    return KeyActivities;
  }

  remove(id: string):KeyActivity {
    const KeyActivities=this.findOne(id);
    this.KeyActivities=this.KeyActivities.filter(KeyActivities=>KeyActivities.id!=id);
    console.log(KeyActivities);
    return KeyActivities;
  }
}
