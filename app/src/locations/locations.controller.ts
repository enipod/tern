import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
    constructor(private readonly locationsService: LocationsService) {}

    @Get()
    findAll() {
        return this.locationsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.locationsService.findOne(id);
    }

    @Post()
    create(@Body() createLocationDto) {
        return this.locationsService.create(createLocationDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateLocationDto) {
        return this.locationsService.update(id, updateLocationDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.locationsService.remove(id);
    }
}
