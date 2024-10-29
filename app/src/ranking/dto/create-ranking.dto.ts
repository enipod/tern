import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateRankingDto {
  @IsString()
  @IsNotEmpty()
  readonly playerId: string;

  @IsString()
  @IsNotEmpty()
  readonly sportId: string;

  @IsNumber()
  @Min(1)
  @Max(100)
  readonly ranking: number;

  @IsNumber()
  @Min(0)
  readonly points: number;
}
