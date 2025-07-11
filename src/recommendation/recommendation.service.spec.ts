import { RecommendationService } from './recommendation.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';

describe('RecommendationService', () => {
  let service: RecommendationService;

  beforeEach(() => {
    service = new RecommendationService();
  });

  it('should recommend Term Life with longer term for young age', () => {
    const dto: CreateRecommendationDto = {
      age: 25,
      income: 50000,
      dependents: 2,
      riskTolerance: 'Medium',
    };

    const result = service.create(dto);

    expect(result.recommendation).toContain('Term Life');
    expect(result.recommendation).toContain('30 years');
    expect(result.recommendation).toContain('$550k');
  });

  it('should recommend Whole Life for age >= 50', () => {
    const dto: CreateRecommendationDto = {
      age: 55,
      income: 60000,
      dependents: 1,
      riskTolerance: 'Medium',
    };

    const result = service.create(dto);

    expect(result.recommendation).toContain('Whole Life');
    expect(result.recommendation).toContain('$650k');
  });

  it('should adjust plan type to Whole Life for low risk tolerance', () => {
    const dto: CreateRecommendationDto = {
      age: 40,
      income: 70000,
      dependents: 0,
      riskTolerance: 'Low',
    };

    const result = service.create(dto);

    expect(result.recommendation).toContain('Whole Life');
  });

  it('should shorten term for high risk tolerance and Term Life', () => {
    const dto: CreateRecommendationDto = {
      age: 35,
      income: 80000,
      dependents: 0,
      riskTolerance: 'High',
    };

    const result = service.create(dto);

    expect(result.recommendation).toContain('Term Life');
    expect(result.recommendation).toContain('15 years');
  });
});
