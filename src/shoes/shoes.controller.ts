import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { Shoe } from './shoe.entity';

@Controller('shoes')
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) {}

  @Post()
  create(@Body() createShoeDto: CreateShoeDto): Promise<Shoe> {
    return this.shoesService.create(createShoeDto);
  }

  @Get()
  findAll(): Promise<Shoe[]> {
    return this.shoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Shoe> {
    return this.shoesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShoeDto: UpdateShoeDto,
  ): Promise<Shoe> {
    return this.shoesService.update(id, updateShoeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.shoesService.remove(id);
  }
}