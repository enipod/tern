import { IsString, IsNumber, IsOptional, IsArray, IsIn } from 'class-validator';

export class UpdatePlayerDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsNumber()
  readonly age?: number;

  @IsOptional()
  @IsString()
  @IsIn(['beginner', 'intermediate', 'advanced'])
  readonly skillLevel?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly preferredSports?: string[];

  @IsOptional()
  @IsString()
  readonly bio?: string;

  @IsOptional()
  @IsString()
  readonly location?: string;
}
