import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class CreateSportDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsNumber()
  @Min(1)
  readonly minPlayers: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  readonly maxPlayers: number;
}
