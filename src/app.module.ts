import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternalTransfersModule } from './internal-transfers/internal-transfers.module';

@Module({
  imports: [InternalTransfersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
