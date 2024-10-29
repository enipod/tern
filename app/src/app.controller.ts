import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/profile')
  getProfile(): object {
    return this.appService.getProfile();
  }

  @Get('/friends')
  getFriends(): Array<object> {
    return this.appService.getFriends();
  }

  @Get('/match')
  getMatch(): object {
    return this.appService.getMatch();
  }

  @Get('/matches')
  getMatches(): Array<object> {
    return this.appService.getMatches();
  }
}
