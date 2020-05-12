import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { DatabaseModule } from 'src/database.module';
import { itemProviders } from './item.provider';

@Module({  
    imports: [
        DatabaseModule
    ],
    controllers: [ItemController],
    providers: [
        ...itemProviders,
        ItemService
    ],
})
export class ItemModule {

}
