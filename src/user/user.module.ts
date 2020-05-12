import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database.module';
import { UserService } from './user.service';
import { UserProviders } from './user.provider';

@Module({  
    imports: [
        DatabaseModule
    ],
    controllers: [UserController],
    providers: [
        ...UserProviders,
        UserService
    ],
    exports: [
        UserService
    ]
})
export class UserModule {

}
