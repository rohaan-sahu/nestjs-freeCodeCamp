import { IsOptional, IsString,Length } from "class-validator";

export class UpdateProfileDto{
    id:string;

    @IsOptional()
    @IsString()
    @Length(3,100)
    name?: string;

    @IsOptional()
    @IsString()
    @Length(3,500)
    description?: string;
}