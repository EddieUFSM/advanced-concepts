import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InternalTransfersService } from './internal-transfers.service';
import { CreateInternalTransferDto } from './dto/create-internal-transfer.dto';
import { UpdateInternalTransferDto } from './dto/update-internal-transfer.dto';

@Controller('internal-transfers')
export class InternalTransfersController {
  constructor(private readonly internalTransfersService: InternalTransfersService) {}

  @Post()
  create(@Body() createInternalTransferDto: CreateInternalTransferDto) {
    return this.internalTransfersService.create(createInternalTransferDto);
  }

  @Get()
  findAll() {
    return this.internalTransfersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internalTransfersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternalTransferDto: UpdateInternalTransferDto) {
    return this.internalTransfersService.update(+id, updateInternalTransferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internalTransfersService.remove(+id);
  }
}
