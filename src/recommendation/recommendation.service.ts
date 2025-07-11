import { Injectable } from '@nestjs/common';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recommendation } from './entities/recommendation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecommendationService {
  constructor(
    @InjectRepository(Recommendation)
    private readonly recommendationRepo: Repository<Recommendation>,
  ) {}
  async create(dto: CreateRecommendationDto) {
    const { age, income, dependents, riskTolerance } = dto;

    // Default plan type is Term Life
    let planType = 'Term Life';

    // Basic coverage amount 10 times the income
    let coverageAmount = income * 10;

    // Default term length is 20 years
    let termLength = 20;

    // If age is less than 30, give longer term
    if (age < 30) {
      termLength = 30;
    }
    // If age is 50 or more, recommend Whole Life plan
    else if (age >= 50) {
      planType = 'Whole Life';
      termLength = 20;
    }

    // Add extra coverage for each dependent
    coverageAmount += dependents * 50000;

    // If risk is low, use Whole Life plan
    if (riskTolerance === 'Low') {
      planType = 'Whole Life';
    }
    // If risk is high and plan is Term Life, reduce term by 5 years
    else if (riskTolerance === 'High' && planType === 'Term Life') {
      termLength -= 5;
    }

    // Format amount
    const formattedAmount = `$${(coverageAmount / 1000).toFixed(0)}k`;

    const recommendation = `${planType} Insurance – ${formattedAmount} coverage for ${termLength} years`;
    const explanation = `Based on your age, income, dependents and risk level, a ${planType} plan with about ${formattedAmount} coverage for ${termLength} years is recommended.`;

    const newRecommendation = this.recommendationRepo.create({
      age,
      income,
      dependents,
      riskTolerance,
      recommendation,
      explanation,
    });
    await this.recommendationRepo.save(newRecommendation);

    // Return final recommendation and explanation
    return {
      recommendation,
      explanation,
    };
  }

  async findAll(page = 1, limit = 10) {
    const [data, total] = await this.recommendationRepo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { id: 'DESC' },
    });

    return {
      data,
      total,
      page,
      limit
    };
  }
}
