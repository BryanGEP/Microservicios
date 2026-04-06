import { IsString } from "class-validator";

export class CreateKeyActivityDto {
    @IsString()
    activityName: string;

    @IsString()
    description: string;
}
