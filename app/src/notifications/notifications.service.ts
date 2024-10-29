import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
    private notifications = []; // Replace with actual database logic later

    findAll() {
        return this.notifications;
    }

    findOne(id: string) {
        return this.notifications.find(
            (notification) => notification.id === id,
        );
    }

    create(createNotificationDto) {
        const newNotification = {
            id: Date.now().toString(),
            ...createNotificationDto,
        };
        this.notifications.push(newNotification);
        return newNotification;
    }

    update(id: string, updateNotificationDto) {
        const index = this.notifications.findIndex(
            (notification) => notification.id === id,
        );
        if (index !== -1) {
            this.notifications[index] = {
                ...this.notifications[index],
                ...updateNotificationDto,
            };
            return this.notifications[index];
        }
        return null;
    }

    remove(id: string) {
        const index = this.notifications.findIndex(
            (notification) => notification.id === id,
        );
        if (index !== -1) {
            return this.notifications.splice(index, 1);
        }
        return null;
    }
}
