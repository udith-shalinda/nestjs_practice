import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { NoteEntity } from "src/note/note.entity";
import { UserEntity } from "src/user/user.entity";

@Entity()
export class ShareNotes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: number;
  @ManyToOne(()=> UserEntity, users=> users.notesYouShared)
  @JoinColumn({name:"senderId"})
  sender: UserEntity

  @Column()
  targetId: number;
  @ManyToOne(()=> UserEntity, users=> users.notesSharedWithMe)
  @JoinColumn({name:"targetId"})
  target: UserEntity

  @Column()
  noteId: string;
  @ManyToOne(()=>   NoteEntity, note=> note.shares)
  @JoinColumn({name:"noteId"})
  note: NoteEntity

}