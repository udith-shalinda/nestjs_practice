import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './dto/item.dto';
import { ItemEntity } from './item.entity';

@Controller('item')
export class ItemController {

    constructor(
        private itemService: ItemService,
    ){}

    @Get("/")
    findAll(): Promise<ItemEntity[]>{
        return this.itemService.findAll();
    }

    @Post("/createItem")
    save(@Body()item: ItemDto): Promise<ItemEntity>{
        return this.itemService.save(item);
    }
}
