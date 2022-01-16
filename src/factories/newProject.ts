import { v4 as v4uuid } from 'uuid';
import { ProjectInterface } from '../types/interfaces.js';
import { getRandomItemFromArray } from '../utils/utils.js';
import {
  projectTitles,
  projectDescriptions,
} from '../config/randomSentences.js';

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
    title: getRandomItemFromArray(projectTitles),
    description: getRandomItemFromArray(projectDescriptions),
    date: createDate(),
    notes: [],
  };
}
