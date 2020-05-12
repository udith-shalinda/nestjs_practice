import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from "src/user/user.entity";
import { ShareNotes } from "src/share_note/share_note.entity";


@Entity()
export class NoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  ownerId: string;
  @ManyToOne(()=> UserEntity, users=> users.notes)
  @JoinColumn({name:"ownerId"})
  owner: UserEntity

  @OneToMany(()=> ShareNotes, shareNotes=> shareNotes.note)
  shares: ShareNotes[]
  
}