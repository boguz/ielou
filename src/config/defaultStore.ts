import { IelouStoreType } from '../types/interfaces.js';
import { DATE_OPTIONS } from './constants.js';

/**
 * Default store to be used on the first time the app is used on a browser.
 * There is an example project with some note with tips on how to use the app.
 */
export const defaultStore: IelouStoreType = {
  isDark: false,
  activeProject: null,
  projects: [
    {
      id: '01',
      title: 'Example Project',
      description: 'Here are some tips on how to use the ielou app.',
      date: new Date().toLocaleString(undefined, DATE_OPTIONS),
      notes: [
        {
          id: '01',
          isPinned: true,
          content: 'Hello there! Lets go!.',
        },
        {
          id: '03',
          isPinned: false,
          content: 'Double click the Project title or description to edit',
        },
        {
          id: '04',
          isPinned: false,
          content: 'Double click a note content to edit',
        },
        {
          id: '05',
          isPinned: false,
          content: 'Go to the settings to change the theme',
        },
      ],
    },
  ],
};
