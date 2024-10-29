import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersController } from './players/players.controller';
import { PlayersService } from './players/players.service';
import { MatchesController } from './matches/matches.controller';
import { MatchesService } from './matches/matches.service';
import { TeamsController } from './teams/teams.controller';
import { TeamsService } from './teams/teams.service';
import { SportsController } from './sports/sports.controller';
import { SportsService } from './sports/sports.service';
import { LocationsController } from './locations/locations.controller';
import { LocationsService } from './locations/locations.service';
import { RankingController } from './ranking/ranking.controller';
import { RankingService } from './ranking/ranking.service';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsService } from './notifications/notifications.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    PlayersController,
    MatchesController,
    TeamsController,
    SportsController,
    LocationsController,
    RankingController,
    NotificationsController,
  ],
  providers: [
    AppService,
    PlayersService,
    MatchesService,
    TeamsService,
    SportsService,
    LocationsService,
    RankingService,
    NotificationsService,
  ],
})
export class AppModule {}
