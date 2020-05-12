import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NoteEntity } from './note.entity';

@Injectable()
export class NoteService {

    constructor(
        @Inject('NOTE_REPOSITORY')
        readonly noteRepository: Repository<NoteEntity>,
    ){}

    async findAll(): Promise<NoteEntity[]>{
        return await this.noteRepository.find();
    }
    save(Note:NoteEntity) : Promise<NoteEntity>{
        const result = this.noteRepository.save(Note);
        if(result){
            return result;
        }else
            return result;
    }
}
