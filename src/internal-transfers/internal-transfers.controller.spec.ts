import { Test, TestingModule } from '@nestjs/testing';
import { InternalTransfersController } from './internal-transfers.controller';
import { InternalTransfersService } from './internal-transfers.service';

describe('InternalTransfersController', () => {
  let controller: InternalTransfersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternalTransfersController],
      providers: [InternalTransfersService],
    }).compile();

    controller = module.get<InternalTransfersController>(InternalTransfersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
