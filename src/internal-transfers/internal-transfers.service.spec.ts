import { Test, TestingModule } from '@nestjs/testing';
import { InternalTransfersService } from './internal-transfers.service';

describe('InternalTransfersService', () => {
  let service: InternalTransfersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternalTransfersService],
    }).compile();

    service = module.get<InternalTransfersService>(InternalTransfersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
