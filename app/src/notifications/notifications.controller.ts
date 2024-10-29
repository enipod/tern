import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @Get()
    findAll() {
        return this.notificationsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.notificationsService.findOne(id);
    }

    @Post()
    create(@Body() createNotificationDto) {
        return this.notificationsService.create(createNotificationDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateNotificationDto) {
        return this.notificationsService.update(id, updateNotificationDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.notificationsService.remove(id);
    }
}
