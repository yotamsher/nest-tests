import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KukuModule } from './kuku/kuku.module';
import { StaticFilesController } from './static_files/static_files.controller';

@Module({
  imports: [KukuModule],
  controllers: [AppController, StaticFilesController],
  providers: [AppService],
})
export class AppModule {}
