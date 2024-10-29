import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  readonly playerId: string;

  @IsString()
  @IsNotEmpty()
  readonly message: string;

  @IsDateString()
  readonly dateTime: string;

  @IsOptional()
  @IsBoolean()
  readonly readStatus?: boolean;
}