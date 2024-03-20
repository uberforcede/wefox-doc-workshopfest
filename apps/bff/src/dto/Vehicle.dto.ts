import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VehicleDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  antitheft: string;

  @IsString()
  @IsNotEmpty()
  finiture: string;
}
