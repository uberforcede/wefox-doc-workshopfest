import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PriceDto {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  currency: string;
}
