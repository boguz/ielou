import { v4 as v4uuid } from 'uuid';
import { ProjectInterface } from '../types/interfaces.js';

const createDate = (): string => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  return new Date().toLocaleString(undefined, options);
};

export function createProject(): ProjectInterface {
  return {
    id: v4uuid().toString(),
    title: 'New Project',
    description: 'Project description goes here. Double click to edit...',
    date: createDate(),
    notes: [],
  };
}
