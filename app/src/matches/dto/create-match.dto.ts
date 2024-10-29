import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  readonly sportId: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly teamA: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly teamB: string[];

  @IsString()
  @IsNotEmpty()
  readonly locationId: string;

  @IsDateString()
  readonly dateTime: string;

  @IsOptional()
  @IsString()
  readonly notes?: string; // Any special instructions or notes for the match
}