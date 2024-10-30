import { Test, TestingModule } from '@nestjs/testing';
import { KukuService } from './kuku.service';
import { Kukurepo } from './kukurepo';
import { CacheModule } from '@nestjs/cache-manager';

describe('KukuService', () => {
  let service: KukuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CacheModule.register()],
      providers: [KukuService, Kukurepo],
    }).compile();

    service = module.get<KukuService>(KukuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
