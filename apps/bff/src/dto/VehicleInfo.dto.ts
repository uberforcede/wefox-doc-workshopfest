import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VehicleInfoDto {
  @IsString()
  @IsNotEmpty()
  vehiclePlate: string;

  @IsString()
  @IsNotEmpty()
  vehicleBrand: string;

  @IsString()
  @IsNotEmpty()
  vehicleModel: string;

  @IsNumber()
  @IsNotEmpty()
  vehicleYear: number;
}
