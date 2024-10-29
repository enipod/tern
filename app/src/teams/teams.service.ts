import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
    private teams = []; // Replace with actual database logic later

    findAll() {
        return this.teams;
    }

    findOne(id: string) {
        return this.teams.find((team) => team.id === id);
    }

    create(createTeamDto) {
        const newTeam = { id: Date.now().toString(), ...createTeamDto };
        this.teams.push(newTeam);
        return newTeam;
    }

    update(id: string, updateTeamDto) {
        const index = this.teams.findIndex((team) => team.id === id);
        if (index !== -1) {
            this.teams[index] = { ...this.teams[index], ...updateTeamDto };
            return this.teams[index];
        }
        return null;
    }

    remove(id: string) {
        const index = this.teams.findIndex((team) => team.id === id);
        if (index !== -1) {
            return this.teams.splice(index, 1);
        }
        return null;
    }
}
