import { CACHE_MANAGER } from "@nestjs/cache-manager";
import {Cache} from 'cache-manager';
import { CreateKukuDto } from "./dto/create-kuku.dto";
import { Inject } from "@nestjs/common";

export class Kukurepo {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache){}
    Allkukus: CreateKukuDto [] = []
    async create(createKukuDto: CreateKukuDto): Promise<CreateKukuDto> {
        createKukuDto.id = this.Allkukus.length
        this.Allkukus.push(createKukuDto)
        await this.cacheManager.set(createKukuDto.id.toString() , createKukuDto, 0);
        return this.cacheManager.get(createKukuDto.id.toString())
    }
    replace(id: number, modifiedObject: CreateKukuDto) {
        this.Allkukus[id] = modifiedObject;
    }
    GetAll() {
        return this.Allkukus;
    }
    
    async findOne(id: number): Promise<CreateKukuDto> {
      return await this.cacheManager.get(id.toString());
    }
}
