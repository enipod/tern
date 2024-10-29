import { IsNumber, IsOptional, Min, Max } from 'class-validator';

export class UpdateRankingDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  readonly ranking?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly points?: number;
}
