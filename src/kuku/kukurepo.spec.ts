import { Test, TestingModule } from '@nestjs/testing';
import { Kukurepo } from '../kuku/kukurepo';
import { CreateKukuDto } from './dto/create-kuku.dto';
import { CacheModule } from '@nestjs/cache-manager';

describe('Kukurepo', () => {
  let repo: Kukurepo;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CacheModule.register()],
      providers: [Kukurepo],
    }).compile();

    repo = module.get<Kukurepo>(Kukurepo);
  });
  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  it('should create entry', () =>{
    let newkukuObject: CreateKukuDto = {id: 0,kcount:2, kiki:'kuku', ktype: 'simple'}
     repo.create(newkukuObject);
     var inRepo = repo.GetAll();
     expect(inRepo.length > 0)
  })

  it('should create multiple entries', async () =>{
    let newkukuObject: CreateKukuDto = {id: 0,kcount:2, kiki:'kuku', ktype: 'simple'}
     await repo.create(newkukuObject);
     const res = await repo.create(newkukuObject);
      expect(res.id).toBe(1);
     var inRepo = repo.GetAll();
     expect(inRepo.length ).toBe(2);
  })
});
