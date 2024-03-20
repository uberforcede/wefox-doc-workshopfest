import { IsNotEmpty, IsString } from 'class-validator';

export class EmailResponseDto {
  @IsString()
  @IsNotEmpty()
  status: boolean;
}
