import { Test, TestingModule } from '@nestjs/testing';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';

describe('MatchesController', () => {
  let controller: MatchesController;
  let service: MatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchesController],
      providers: [MatchesService],
    }).compile();

    controller = module.get<MatchesController>(MatchesController);
    service = module.get<MatchesService>(MatchesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a match', () => {
    const createMatchDto = { sportId: '1', teamA: ['1'], teamB: ['2'], locationId: 'loc1', dateTime: new Date() };
    const result = { ...createMatchDto, id: '1' };
    jest.spyOn(service, 'create').mockImplementation(() => result);

    expect(controller.create(createMatchDto)).toEqual(result);
  });
});
