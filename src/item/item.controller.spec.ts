import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { Repository } from 'typeorm';
import { ItemEntity } from './item.entity';

describe('Item Controller', () => {
  let controller: ItemController;
  let service: any;

  const mockUserFactory = () => ({
    findAll: jest.fn(),
    save: jest.fn()
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[ItemController,{provide:ItemService,useFactory: mockUserFactory}],
    }).compile();

    controller = module.get<ItemController>(ItemController);
    service = module.get<ItemService>(ItemService);
  });

  it('find all', async() => {
    service.findAll.mockResolvedValue([{id:1,name:"name",type:"trype"}])
    const dataset: any = await controller.findAll()
    expect(dataset[0].name).toBe("name");
  });

  it('save ', async() => {
    const data = {id:1,name:"name",type:"trype"};
    service.save.mockResolvedValue(data)
    const dataset: any = await controller.save(data)
    expect(dataset.name).toBe("name");
  });


});
