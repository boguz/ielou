import { v4 as v4uuid } from 'uuid';
import { ProjectInterface } from '../types/interfaces.js';
import { getRandomItemFromArray } from '../utils/utils.js';
import {
  projectTitles,
  projectDescriptions,
} from '../config/randomSentences.js';
import { DATE_OPTIONS } from '../config/constants.js';

/**
 * Create a new project with a random title and random description
 *
 * @returns {ProjectInterface} Empty project with random title and description
 */
export function createProject(): ProjectInterface {
  return {
    id: v4uuid().toString(),
    title: getRandomItemFromArray(projectTitles),
    description: getRandomItemFromArray(projectDescriptions),
    date: new Date().toLocaleString(undefined, DATE_OPTIONS),
    notes: [],
  };
}
