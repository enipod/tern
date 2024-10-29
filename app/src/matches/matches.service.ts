import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchesService {
    private matches = []; // Replace with actual database logic later

    findAll() {
        return this.matches;
    }

    findOne(id: string) {
        return this.matches.find((match) => match.id === id);
    }

    create(createMatchDto) {
        const newMatch = { id: Date.now().toString(), ...createMatchDto };
        this.matches.push(newMatch);
        return newMatch;
    }

    update(id: string, updateMatchDto) {
        const index = this.matches.findIndex((match) => match.id === id);
        if (index !== -1) {
            this.matches[index] = { ...this.matches[index], ...updateMatchDto };
            return this.matches[index];
        }
        return null;
    }

    remove(id: string) {
        const index = this.matches.findIndex((match) => match.id === id);
        if (index !== -1) {
            return this.matches.splice(index, 1);
        }
        return null;
    }
}
