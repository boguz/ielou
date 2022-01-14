import { v4 as v4uuid } from 'uuid';
import { NoteInterface } from '../types/interfaces.js';

export function createNote(): NoteInterface {
  return {
    id: v4uuid(),
    content: 'Add content...',
    isPinned: false,
  };
}
