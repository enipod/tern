import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class UpdateSportDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  readonly minPlayers?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  readonly maxPlayers?: number;
}