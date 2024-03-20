import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InsuranceDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  insuredValue: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  yearWithoutClaims: number;

  @IsNumber()
  @IsNotEmpty()
  claimsLast5Years: number;
}
