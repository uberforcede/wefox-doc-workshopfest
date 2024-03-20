import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { PriceDto } from './Price.dto';

export class QuoteResponseDto {
  @IsString()
  @IsNotEmpty()
  quotationId: string;

  @IsDate()
  @IsNotEmpty()
  expireDate: Date;

  @IsString()
  @IsNotEmpty()
  status: string;

  price: PriceDto;
}
