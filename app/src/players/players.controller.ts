import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) {}

    @Get()
    findAll() {
        return this.playersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.playersService.findOne(id);
    }

    @Post()
    create(@Body() createPlayerDto) {
        return this.playersService.create(createPlayerDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePlayerDto) {
        return this.playersService.update(id, updatePlayerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.playersService.remove(id);
    }
}
