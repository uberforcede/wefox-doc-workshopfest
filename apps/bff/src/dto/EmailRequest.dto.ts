import { IsNotEmpty, IsString } from 'class-validator';

export class EmailRequestDto {
  @IsString()
  @IsNotEmpty()
  quotationId: string;
}
