import { IsString, IsNumber, IsOptional, Min, IsUrl } from 'class-validator';

export class CreateShoeDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsUrl()
  imageUrl: string;

  @IsString()
  @IsOptional()
  description?: string;
}