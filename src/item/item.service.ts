import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemEntity } from './item.entity';

@Injectable()
export class ItemService {

    constructor(
        @Inject('ITEM_REPOSITORY')
        readonly itemRepository: Repository<ItemEntity>,
    ){}

    async findAll(): Promise<ItemEntity[]>{
        return await this.itemRepository.find();
    }
    save(item:ItemEntity) : Promise<ItemEntity>{
        const result = this.itemRepository.save(item);
        if(result){
            return result;
        }else
            return result;
    }
}
