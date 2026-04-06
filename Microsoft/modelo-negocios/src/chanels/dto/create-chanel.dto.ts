import { IsString } from "class-validator";

export class CreateChanelDto {
    @IsString()
    type: string;

    @IsString()
    details: string;
}

