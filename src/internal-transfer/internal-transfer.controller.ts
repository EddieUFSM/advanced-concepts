import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InternalTransferService } from './internal-transfer.service';
import { CreateInternalTransferDto } from './dto/create-internal-transfer.dto';
import { UpdateInternalTransferDto } from './dto/update-internal-transfer.dto';

@Controller('internal-transfer')
export class InternalTransferController {
  constructor(private readonly internalTransferService: InternalTransferService) {}

  @Post()
  create(@Body() createInternalTransferDto: CreateInternalTransferDto) {
    return this.internalTransferService.create(createInternalTransferDto);
  }

  @Get()
  findAll() {
    return this.internalTransferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internalTransferService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternalTransferDto: UpdateInternalTransferDto) {
    return this.internalTransferService.update(+id, updateInternalTransferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internalTransferService.remove(+id);
  }
}
