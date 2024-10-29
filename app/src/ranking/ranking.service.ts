import { Injectable } from '@nestjs/common';

@Injectable()
export class RankingService {
    private rankings = []; // Replace with actual database logic later

    findAll() {
        return this.rankings;
    }

    findOne(id: string) {
        return this.rankings.find((ranking) => ranking.id === id);
    }

    create(createRankingDto) {
        const newRanking = { id: Date.now().toString(), ...createRankingDto };
        this.rankings.push(newRanking);
        return newRanking;
    }

    update(id: string, updateRankingDto) {
        const index = this.rankings.findIndex((ranking) => ranking.id === id);
        if (index !== -1) {
            this.rankings[index] = {
                ...this.rankings[index],
                ...updateRankingDto,
            };
            return this.rankings[index];
        }
        return null;
    }

    remove(id: string) {
        const index = this.rankings.findIndex((ranking) => ranking.id === id);
        if (index !== -1) {
            return this.rankings.splice(index, 1);
        }
        return null;
    }
}
