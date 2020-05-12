import { Connection } from 'typeorm';
import { ItemEntity } from './item.entity';

export const itemProviders = [
  {
    provide: 'ITEM_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ItemEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];