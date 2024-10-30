import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class CreateKukuDto {
    @IsNotEmpty()
    ktype: string
    @IsNotEmpty()
    kiki: string
    kcount: number
    id: number
}
