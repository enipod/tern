import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new player', () => {
    const playerDto = { name: 'John Doe', age: 25, skillLevel: 'beginner', preferredSports: ['1', '2'] };
    const result = service.create(playerDto);
    expect(result).toEqual(expect.objectContaining(playerDto));
  });
});
