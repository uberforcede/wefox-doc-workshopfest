import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { VehicleDto } from './Vehicle.dto';
import { InsuranceDto } from './Insurance.dto';

export class QuoteRequestDto {
  @IsString()
  @IsNotEmpty()
  plate: string;

  @IsDate()
  @IsNotEmpty()
  birthdate: Date;

  vehicle: VehicleDto;
  insurance: InsuranceDto;
}
