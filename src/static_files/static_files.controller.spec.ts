import { Test, TestingModule } from '@nestjs/testing';
import { StaticFilesController } from './static_files.controller';

describe('StaticFilesController', () => {
  let controller: StaticFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaticFilesController],
    }).compile();

    controller = module.get<StaticFilesController>(StaticFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
