import { IsString } from "class-validator";

export class CreateCustomerRelationshipDto {
    @IsString()
    relationshipType: string;

    @IsString()
    strategy: string;
}

