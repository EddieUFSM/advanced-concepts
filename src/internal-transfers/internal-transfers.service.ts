import { Injectable } from '@nestjs/common';
import { CreateInternalTransferDto } from './dto/create-internal-transfer.dto';
import { UpdateInternalTransferDto } from './dto/update-internal-transfer.dto';

@Injectable()
export class InternalTransfersService {
  create(createInternalTransferDto: CreateInternalTransferDto) {
    return 'This action adds a new internalTransfer';
  }

  findAll() {
    return `This action returns all internalTransfers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} internalTransfer`;
  }

  update(id: number, updateInternalTransferDto: UpdateInternalTransferDto) {
    return `This action updates a #${id} internalTransfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} internalTransfer`;
  }
}
