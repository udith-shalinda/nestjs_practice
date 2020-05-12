import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NoteEntity } from './note.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class NoteService {

    constructor(
        @Inject('NOTE_REPOSITORY')
        readonly noteRepository: Repository<NoteEntity>,
        readonly userService: UserService
    ){}

    async findAll(): Promise<NoteEntity[]>{
        return await this.noteRepository.find();
    }
    async save(Note:NoteEntity) : Promise<NoteEntity>{
        const user = await this.userService.findOne(Note.ownerId);
        console.log(user);
        if(!user){
            throw new ConflictException("uesr dgsgsid note found");
        }else{
            try {
                const result = this.noteRepository.save(Note);
                if(result){
                    return result;
                }else
                    return result;
            } catch (error) {
                throw new ConflictException("uesr id note found");
            }
        }

        
    }
    async finds(id: string): Promise<NoteEntity[]>{
        try {
            return await this.noteRepository.find({
                where:{
                    ownerId:id
                },
                relations:['owner']
            });
        } catch (error) {
            throw new ConflictException("dfsfs");
        }
    }
}
