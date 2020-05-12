import { Module } from '@nestjs/common';
import { databaseProviders } from './config/db.mysql';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}