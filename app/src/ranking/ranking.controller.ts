import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { RankingService } from './ranking.service';

@Controller('ranking')
export class RankingController {
    constructor(private readonly rankingService: RankingService) {}

    @Get()
    findAll() {
        return this.rankingService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.rankingService.findOne(id);
    }

    @Post()
    create(@Body() createRankingDto) {
        return this.rankingService.create(createRankingDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRankingDto) {
        return this.rankingService.update(id, updateRankingDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.rankingService.remove(id);
    }
}
