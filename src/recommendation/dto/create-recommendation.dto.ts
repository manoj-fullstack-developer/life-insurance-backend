import { Type } from 'class-transformer';
import { IsNumber, IsString, IsIn, Min } from 'class-validator';

export class CreateRecommendationDto {
  @IsNumber()
  @Type(() => Number)
  @Min(18)
  age: number;

  @IsNumber()
  @Type(() => Number)
  @Min(1)
  income: number;

  @IsNumber()
  @Type(() => Number)
  @Min(0)
  dependents: number;

  @IsString()
  @IsIn(['Low', 'Medium', 'High'])
  riskTolerance: string;
}
