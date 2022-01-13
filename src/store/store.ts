import { IelouStoreType } from '../types/types.js';
import { STORE_NAME } from '../config/constants.js';

export const defaultStore: IelouStoreType = [];

export function updateStore(store: IelouStoreType) {
  return localStorage.setItem(STORE_NAME, JSON.stringify(store));
}

export function getStore(): IelouStoreType {
  const stringifiedStore = localStorage.getItem(STORE_NAME)!;
  return JSON.parse(stringifiedStore) as IelouStoreType;
}

//
// export const ielouStoreAPI = {
//   updateStore: async (store: IelouStoreType) => {
//     await null;
//     return localStorage.setItem(STORE_NAME, JSON.stringify(store));
//   },
//   getFullStore: async () => {
//     await null;
//     return localStorage.getItem(STORE_NAME);
//   }
// }
