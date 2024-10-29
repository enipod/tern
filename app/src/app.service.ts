/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getProfile(): object {
    return {
      name: 'Shako Hoxha',
      age: 47,
      mainSport: 'Football',
      verified: true,
      matchesPlayed: 127,
      personality: 'Friendly', //TODO enum
    };
  }

  getFriends(): Array<object> {
    return [
      {
        name: 'Albin Asllanderi',
        age: 26,
        mainSport: 'Basketball',
        verified: true,
        matchesPlayed: 23,
        personality: 'Aggresive', //TODO enum
      },
      {
        name: 'Muharrem Qena',
        age: 31,
        mainSport: 'Voleyball',
        verified: false,
        matchesPlayed: 2,
        personality: 'Fair', //TODO enum
      },
      {
        name: 'Lul Zogu',
        age: 19,
        mainSport: 'Football',
        verified: true,
        matchesPlayed: 17,
        personality: 'Friendly', //TODO enum
      },
    ];
  }

  getMatch(): object {
    return {
      name: 'Termin',
      time: '18:00:00',
      place: 'Fushat Prince',
      full: true,
      difficulty: 'Hard', //TODO enum
    }
  }

  getMatches(): Array<object> {
    return [
      {
        name: 'Termin #1',
        time: '18:00:00, 29 Oct',
        place: 'Fushat Prince',
        active: true,
        difficulty: 'Hard', //TODO enum
      },
      {
        name: 'Termin #2',
        time: '18:00:00, 29 Oct',
        place: 'Ylli',
        active: true,
        difficulty: 'Very Hard', //TODO enum
      },
      {
        name: 'Termin #3',
        time: '18:00:00, 01 Nov',
        place: 'Beslidhja',
        active: true,
        difficulty: 'Easy', //TODO enum
      },
      {
        name: 'Termin #4',
        time: '18:00:00, 04 Nov',
        place: '',
        active: false,
        difficulty: 'Medium', //TODO enum
      },

    ];
  }
}
