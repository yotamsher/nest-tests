import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { KukuService } from './kuku.service';
import { CreateKukuDto } from './dto/create-kuku.dto';
import { UpdateKukuDto } from './dto/update-kuku.dto';

@Controller('kuku')
export class KukuController {
  constructor(private readonly kukuService: KukuService) {}

  @Post()
  create(@Body() createKukuDto: CreateKukuDto) {
    return this.kukuService.create(createKukuDto);
  }

  @Get()
  findAll() {
    return this.kukuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kukuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKukuDto: UpdateKukuDto) {
    return this.kukuService.update(+id, updateKukuDto);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() replaceKukuDto: CreateKukuDto) {
    return this.kukuService.replace(+id, replaceKukuDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kukuService.remove(+id);
  }
}
