import { v4 as v4uuid } from 'uuid';
import { ProjectInterface } from '../types/interfaces.js';

export function createProject(): ProjectInterface {
  return {
    id: v4uuid().toString(),
    title: 'New Project',
    notes: [],
  };
}
