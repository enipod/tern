import { IsString, IsOptional, IsArray, IsDateString } from 'class-validator';

export class UpdateMatchDto {
  @IsOptional()
  @IsString()
  readonly sportId?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly teamA?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly teamB?: string[];

  @IsOptional()
  @IsString()
  readonly locationId?: string;

  @IsOptional()
  @IsDateString()
  readonly dateTime?: string;

  @IsOptional()
  @IsString()
  readonly notes?: string;
}