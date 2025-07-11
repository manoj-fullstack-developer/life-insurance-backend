import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { RecommendationService } from './recommendation.service';

@Controller('recommendation')
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Post()
  create(@Body() createRecommendationDto: CreateRecommendationDto) {
    return this.recommendationService.create(createRecommendationDto);
  }

  @Get()
  findAll(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.recommendationService.findAll(
      Number(page) || 1,
      Number(limit) || 10,
    );
  }
}
