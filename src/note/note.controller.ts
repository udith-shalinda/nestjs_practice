import { Controller, Get, Post, Body } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteEntity } from './note.entity';

@Controller('note')
export class NoteController {

    constructor(
        private noteService: NoteService,
    ){}

    @Get("/")
    findAll(): Promise<NoteEntity[]>{
        return this.noteService.findAll();
    }

    @Post("/createItem")
    save(@Body()item: any): Promise<NoteEntity>{
        return this.noteService.save(item);
    }
}
