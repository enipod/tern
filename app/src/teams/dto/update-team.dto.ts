import { IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateTeamDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly members?: string[];

  @IsOptional()
  @IsString()
  readonly sportId?: string;

  @IsOptional()
  @IsString()
  readonly teamBio?: string;
}
