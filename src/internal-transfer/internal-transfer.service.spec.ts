import { Test, TestingModule } from '@nestjs/testing';
import { InternalTransferService } from './internal-transfer.service';

describe('InternalTransferService', () => {
  let service: InternalTransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternalTransferService],
    }).compile();

    service = module.get<InternalTransferService>(InternalTransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
