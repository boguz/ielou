import { v4 as v4uuid } from 'uuid';
import { NoteInterface } from '../types/interfaces.js';
import { getRandomItemFromArray } from '../utils/utils.js';
import { noteContents } from '../config/randomSentences.js';

export function createNote(): NoteInterface {
  return {
    id: v4uuid(),
    content: getRandomItemFromArray(noteContents),
    isPinned: false,
  };
}
