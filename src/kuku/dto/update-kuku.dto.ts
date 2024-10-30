import { PartialType } from '@nestjs/mapped-types';
import { CreateKukuDto } from './create-kuku.dto';

export class UpdateKukuDto extends PartialType(CreateKukuDto) {}
