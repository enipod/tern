import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) {}

    @Get()
    findAll() {
        return this.matchesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.matchesService.findOne(id);
    }

    @Post()
    create(@Body() createMatchDto) {
        return this.matchesService.create(createMatchDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateMatchDto) {
        return this.matchesService.update(id, updateMatchDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.matchesService.remove(id);
    }
}
