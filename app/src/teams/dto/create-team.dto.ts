import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly members: string[];

  @IsString()
  @IsNotEmpty()
  readonly sportId: string;

  @IsOptional()
  @IsString()
  readonly teamBio?: string; // Brief description of the team
}