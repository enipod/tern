import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationsService {
    private locations = []; // Replace with actual database logic later

    findAll() {
        return this.locations;
    }

    findOne(id: string) {
        return this.locations.find((location) => location.id === id);
    }

    create(createLocationDto) {
        const newLocation = { id: Date.now().toString(), ...createLocationDto };
        this.locations.push(newLocation);
        return newLocation;
    }

    update(id: string, updateLocationDto) {
        const index = this.locations.findIndex(
            (location) => location.id === id,
        );
        if (index !== -1) {
            this.locations[index] = {
                ...this.locations[index],
                ...updateLocationDto,
            };
            return this.locations[index];
        }
        return null;
    }

    remove(id: string) {
        const index = this.locations.findIndex(
            (location) => location.id === id,
        );
        if (index !== -1) {
            return this.locations.splice(index, 1);
        }
        return null;
    }
}
