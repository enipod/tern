import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

describe('PlayersController', () => {
  let controller: PlayersController;
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [PlayersService],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a player', () => {
    const createPlayerDto = { name: 'John Doe', age: 25, skillLevel: 'beginner', preferredSports: ['1', '2'] };
    const result = { ...createPlayerDto, id: '1' };
    jest.spyOn(service, 'create').mockImplementation(() => result);

    expect(controller.create(createPlayerDto)).toEqual(result);
  });
});
