import { IsString } from "class-validator";

export class CreateKeyPartnerDto {

    @IsString()
    partnerName: string;

    @IsString()
    collaborationType: string;
}
