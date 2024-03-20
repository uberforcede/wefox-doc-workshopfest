import { IsNotEmpty, IsString } from 'class-validator';
import { PriceDto } from './Price.dto';

export class QuotationResponseDto {
  @IsString()
  @IsNotEmpty()
  quotationId: string;

  price: PriceDto;
}
