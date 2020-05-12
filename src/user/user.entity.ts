import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { NoteEntity } from "src/note/note.entity";
import { ShareNotes } from "src/share_note/share_note.entity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @OneToMany(()=> NoteEntity, note=> note.owner)
  notes: NoteEntity[]

  @OneToMany(()=> ShareNotes, shareNotes=> shareNotes.target)
  notesSharedWithMe: NoteEntity[]

  @OneToMany(()=> ShareNotes, shareNotes=> shareNotes.sender)
  notesYouShared: NoteEntity[]
  
  
}