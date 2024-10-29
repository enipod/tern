import { IsString, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class UpdateNotificationDto {
  @IsOptional()
  @IsString()
  readonly message?: string;

  @IsOptional()
  @IsDateString()
  readonly dateTime?: string;

  @IsOptional()
  @IsBoolean()
  readonly readStatus?: boolean;
}
