import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternalTransferModule } from './internal-transfer/internal-transfer.module';

@Module({
  imports: [InternalTransferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
