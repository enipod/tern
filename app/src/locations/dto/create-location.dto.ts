import { IsString, IsNotEmpty, IsOptional, IsNumber, IsArray } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

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
