import { Test, TestingModule } from '@nestjs/testing';
import { KukuController } from './kuku.controller';
import { KukuService } from './kuku.service';
import { KukuModule } from './kuku.module';
import { Kukurepo } from './kukurepo';
import { CacheModule } from '@nestjs/cache-manager';

describe('KukuController', () => {
  let controller: KukuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[CacheModule.register()],
      controllers: [KukuController],
      providers: [KukuService, Kukurepo],
    }).compile();

    controller = module.get<KukuController>(KukuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
