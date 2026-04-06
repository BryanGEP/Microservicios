import { Controller, ParseIntPipe } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @MessagePattern({ cmd: 'create_member' })
  create(@Payload() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @MessagePattern({ cmd: 'find_all_members' })
  findAll() {
    return this.membersService.findAll();
  }

  @MessagePattern({ cmd: 'find_member' })
  findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.membersService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_member' })
  update(@Payload() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(updateMemberDto.id, updateMemberDto);
  }

  @MessagePattern({ cmd: 'remove_member' })
  remove(@Payload('id', ParseIntPipe) id: number) {
    return this.membersService.remove(id);
  }
}