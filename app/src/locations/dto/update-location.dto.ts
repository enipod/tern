import { IsString, IsOptional, IsNumber, IsArray } from 'class-validator';

export class UpdateLocationDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly address?: string;

  @IsOptional()
  @IsNumber()
  readonly latitude?: number;

  @IsOptional()
  @IsNumber()
  readonly longitude?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly amenities?: string[];
}
