import { IelouStoreType } from '../types/interfaces.js';
import { STORE_NAME } from '../config/constants.js';

export function updateStore(state: IelouStoreType) {
  return localStorage.setItem(STORE_NAME, JSON.stringify(state));
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
