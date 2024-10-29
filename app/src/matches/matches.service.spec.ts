import { Test, TestingModule } from '@nestjs/testing';
import { MatchesService } from './matches.service';

describe('MatchesService', () => {
  let service: MatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchesService],
    }).compile();

    service = module.get<MatchesService>(MatchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a match', () => {
    const matchDto = { sportId: '1', teamA: ['1'], teamB: ['2'], locationId: 'loc1', dateTime: new Date() };
    const result = service.create(matchDto);
    expect(result).toEqual(expect.objectContaining(matchDto));
  });
});
