import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

    @Get()
    findAll() {
        return this.teamsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.teamsService.findOne(id);
    }

    @Post()
    create(@Body() createTeamDto) {
        return this.teamsService.create(createTeamDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTeamDto) {
        return this.teamsService.update(id, updateTeamDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.teamsService.remove(id);
    }
}
