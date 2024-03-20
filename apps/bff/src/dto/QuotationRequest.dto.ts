import { IsNotEmpty, IsString } from 'class-validator';

export class QuotationRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly vehicleType: string;

  @IsString()
  @IsNotEmpty()
  readonly plate: string;

  @IsString()
  @IsNotEmpty()
  readonly birthdate: Date;
}
