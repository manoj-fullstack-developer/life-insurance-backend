import { Test, TestingModule } from '@nestjs/testing';
import { RecommendationController } from './recommendation.controller';
import { RecommendationService } from './recommendation.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';

describe('RecommendationController', () => {
  let controller: RecommendationController;
  let service: RecommendationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommendationController],
      providers: [
        {
          provide: RecommendationService,
          useValue: {
            create: jest.fn(dto => ({
              recommendation: 'Term Life Insurance – $500k coverage for 20 years',
              explanation: 'Sample explanation',
            })),
          },
        },
      ],
    }).compile();

    controller = module.get<RecommendationController>(RecommendationController);
    service = module.get<RecommendationService>(RecommendationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return recommendation on create', () => {
    const dto: CreateRecommendationDto = {
      age: 30,
      income: 50000,
      dependents: 1,
      riskTolerance: 'Medium',
    };

    const result = controller.create(dto);

    expect(service.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual({
      recommendation: 'Term Life Insurance – $500k coverage for 20 years',
      explanation: 'Sample explanation',
    });
  });
});
