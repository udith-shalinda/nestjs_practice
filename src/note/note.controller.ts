import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteEntity } from './note.entity';
import { Note } from './note.dto';

@Controller('note')
export class NoteController {

    constructor(
        private noteService: NoteService,
    ){}

    @Get("/")
    findAll(): Promise<NoteEntity[]>{
        return this.noteService.findAll();
    }

    @Post("/create")
    save(@Body()note: any): Promise<NoteEntity>{
        return this.noteService.save(note);
    }

    @Get("/find/:id")
    finds(@Param("id") id: string): Promise<NoteEntity[]>{
        return this.noteService.finds(id);
    }
}
