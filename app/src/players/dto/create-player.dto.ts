import { IsString, IsNotEmpty, IsNumber, IsOptional, IsArray, IsIn, ArrayNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  @IsIn(['beginner', 'intermediate', 'advanced'])
  readonly skillLevel: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly preferredSports: string[];

  @IsOptional()
  @IsString()
  readonly bio?: string; // A brief player bio

  @IsOptional()
  @IsString()
  readonly location?: string; // Location or city of the player
}
