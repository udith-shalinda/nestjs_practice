import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { DatabaseModule } from 'src/database.module';
import { NoteService } from './note.service';
import { noteProviders } from './note.provider';

@Module({  
    imports: [
        DatabaseModule
    ],
    controllers: [NoteController],
    providers: [
        ...noteProviders,
        NoteService
    ],
    exports: [
        NoteService
    ]
})
export class NoteModule {

}
