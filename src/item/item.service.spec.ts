import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from './item.service';
import { Repository } from 'typeorm';
import { ItemEntity } from './item.entity';
import { ItemController } from './item.controller';

describe('ItemService', () => {
  let service: ItemService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemService],
    }).compile();

    service = module.get<ItemService>(ItemService);

  });

  it('find all', () => {
    expect(service.findAll()).toBe([]);
  });
});
