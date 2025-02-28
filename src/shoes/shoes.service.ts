import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shoe } from './shoe.entity';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';

@Injectable()
export class ShoesService {
  constructor(
    @InjectRepository(Shoe)
    private shoesRepository: Repository<Shoe>,
  ) {}

  findAll(): Promise<Shoe[]> {
    return this.shoesRepository.find();
  }

  async findOne(id: number): Promise<Shoe> {
    const shoe = await this.shoesRepository.findOne({ where: { id } });
    if (!shoe) {
      throw new NotFoundException(`Shoe with ID ${id} not found`);
    }
    return shoe;
  }

  create(createShoeDto: CreateShoeDto): Promise<Shoe> {
    const shoe = this.shoesRepository.create(createShoeDto);
    return this.shoesRepository.save(shoe);
  }

  async update(id: number, updateShoeDto: UpdateShoeDto): Promise<Shoe> {
    const shoe = await this.findOne(id);
    const updatedShoe = this.shoesRepository.merge(shoe, updateShoeDto);
    return this.shoesRepository.save(updatedShoe);
  }

  async remove(id: number): Promise<void> {
    const result = await this.shoesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Shoe with ID ${id} not found`);
    }
  }
}