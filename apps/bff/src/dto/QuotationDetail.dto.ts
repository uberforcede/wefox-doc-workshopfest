import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { VehicleDto } from './Vehicle.dto';
import { InsuranceDto } from './Insurance.dto';
import { PriceDto } from './Price.dto';

export class QuotationDetailDto {
  @IsString()
  @IsNotEmpty()
  plate: string;

  @IsDate()
  @IsNotEmpty()
  birthdate: Date;

  @IsString()
  @IsNotEmpty()
  quotationId: string;

  @IsBoolean()
  @IsNotEmpty()
  notificationStatus: boolean;

  @IsDate()
  @IsNotEmpty()
  expireDate: Date;

  @IsString()
  @IsNotEmpty()
  status: string;

  vehicle: VehicleDto;
  insurance: InsuranceDto;
  price: PriceDto;
}
