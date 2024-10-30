import { Injectable } from '@nestjs/common';
import { CreateKukuDto } from './dto/create-kuku.dto';
import { UpdateKukuDto } from './dto/update-kuku.dto';
import { Kukurepo } from './kukurepo';

@Injectable()
export class KukuService {
  
  constructor(private readonly AllKukus2: Kukurepo) {}

  
  //AllKukus2: Kukurepo = new Kukurepo();

  async create(createKukuDto: CreateKukuDto) {
    this.AllKukus2.create(createKukuDto);
    
    return this.AllKukus2.GetAll();
  }

  findAll() {
    return this.AllKukus2.GetAll();
  }

  async findOne(id: number) {
    const value = await this.AllKukus2.findOne(id);
    return value;
    //return this.Allkukus.find((kuku)=>kuku.id == id  );
  }

  async update(id: number, updateKukuDto: UpdateKukuDto) {
    let currentObject = await this.AllKukus2.findOne(id); 
    if (currentObject != undefined){
    /*  let property: keyof typeof updateKukuDto; // Type is 'foo' | 'bar'

      for (property in updateKukuDto) {
        console.log(`${property}: ${updateKukuDto[property]}`);
        this.Allkukus[foundIndex][property] = updateKukuDto[property];
      */
        Object.entries(updateKukuDto)
        .forEach(([key, value]) =>{
           console.log(`${key}: ${value}`);
           currentObject[key]=value;
        }
      )       
     }
     this.AllKukus2.replace(id, currentObject);
  }

  async replace(id: number, replaceKukuDto: CreateKukuDto) {
    let currentObject = await this.AllKukus2.findOne(id); 
    if (currentObject != undefined){
      replaceKukuDto.id = currentObject.id
      this.AllKukus2.replace(id, replaceKukuDto);
    }
    return this.AllKukus2.GetAll();
 }

  remove(id: number) {
    return `This action removes a #${id} kuku`;
  }
}
