import { Module } from '@nestjs/common';
import { KukuService } from './kuku.service';
import { KukuController } from './kuku.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { Kukurepo } from './kukurepo';

@Module({
  imports:[CacheModule.register()],
  controllers: [KukuController],
  providers: [KukuService, Kukurepo],
})
export class KukuModule {}
