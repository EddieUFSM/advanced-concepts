import { Test, TestingModule } from '@nestjs/testing';
import { InternalTransferController } from './internal-transfer.controller';
import { InternalTransferService } from './internal-transfer.service';

describe('InternalTransferController', () => {
  let controller: InternalTransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternalTransferController],
      providers: [InternalTransferService],
    }).compile();

    controller = module.get<InternalTransferController>(InternalTransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
