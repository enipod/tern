import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
    private players = []; // Replace with actual data source later

    findAll() {
        return this.players;
    }

    findOne(id: string) {
        return this.players.find((player) => player.id === id);
    }

    create(createPlayerDto) {
        const newPlayer = { id: Date.now().toString(), ...createPlayerDto };
        this.players.push(newPlayer);
        return newPlayer;
    }

    update(id: string, updatePlayerDto) {
        const index = this.players.findIndex((player) => player.id === id);
        if (index !== -1) {
        this.players[index] = { ...this.players[index], ...updatePlayerDto };
        return this.players[index];
        }
        return null;
    }

    remove(id: string) {
        const index = this.players.findIndex((player) => player.id === id);
        if (index !== -1) {
        return this.players.splice(index, 1);
        }
        return null;
    }
}
