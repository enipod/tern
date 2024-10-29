import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { SportsService } from './sports.service';

@Controller('sports')
export class SportsController {
    constructor(private readonly sportsService: SportsService) {}

    @Get()
    findAll() {
        return this.sportsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.sportsService.findOne(id);
    }

    @Post()
    create(@Body() createSportDto) {
        return this.sportsService.create(createSportDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateSportDto) {
        return this.sportsService.update(id, updateSportDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.sportsService.remove(id);
    }
}
