import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { Shoe } from './shoe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shoe])],
  controllers: [ShoesController],
  providers: [ShoesService],
})
export class ShoesModule {}