import { Connection } from 'typeorm';
import { NoteEntity } from './note.entity';

export const noteProviders = [
  {
    provide: 'NOTE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(NoteEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];