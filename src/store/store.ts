import { IelouStoreType } from '../types/interfaces.js';
import { STORE_NAME } from '../config/constants.js';

/**
 * Update local storage with newest app state
 * @param state
 */
export function updateStore(state: IelouStoreType) {
  return localStorage.setItem(STORE_NAME, JSON.stringify(state));
}

/**
 * Get app content from local storage
 *
 * @returns {IelouStoreType} App's current state and content
 */
export function getStore(): IelouStoreType {
  const stringifiedStore = localStorage.getItem(STORE_NAME)!;
  return JSON.parse(stringifiedStore) as IelouStoreType;
}
