import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { DatabaseModule } from 'src/database.module';
import { NoteService } from './note.service';
import { noteProviders } from './note.provider';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { NoteEntity } from './note.entity';


@Module({  
    imports: [
        DatabaseModule,
        UserModule,
    ],
    controllers: [NoteController],
    providers: [
        ...noteProviders,
        NoteService,
        // UserService
    ],
    exports: [
        NoteService,
        // UserService
    ]
})
export class NoteModule {

}
