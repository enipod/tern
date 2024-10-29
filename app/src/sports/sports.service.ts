import { Injectable } from '@nestjs/common';

@Injectable()
export class SportsService {
    private sports = []; // Replace with actual database logic later

    findAll() {
        return this.sports;
    }

    findOne(id: string) {
        return this.sports.find((sport) => sport.id === id);
    }

    create(createSportDto) {
        const newSport = { id: Date.now().toString(), ...createSportDto };
        this.sports.push(newSport);
        return newSport;
    }

    update(id: string, updateSportDto) {
        const index = this.sports.findIndex((sport) => sport.id === id);
        if (index !== -1) {
            this.sports[index] = { ...this.sports[index], ...updateSportDto };
            return this.sports[index];
        }
        return null;
    }

    remove(id: string) {
        const index = this.sports.findIndex((sport) => sport.id === id);
        if (index !== -1) {
            return this.sports.splice(index, 1);
        }
        return null;
    }
}
