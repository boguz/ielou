import { IelouStoreType } from '../types/interfaces.js';

export const defaultStore: IelouStoreType = {
  activeProject: null,
  projects: [],
};

/* TEST DEFAULT STORE */
// export const defaultStore: IelouStoreType = {
//   activeProject: '00002',
//   projects: [
//     {
//       id: '00001111',
//       title: 'First',
//       notes: [
//         {
//           id: '00000001',
//           content: 'first note - proj 1',
//           isPinned: false,
//         },
//         {
//           id: '00000002',
//           content: 'second note - proj 1',
//           isPinned: false,
//         },
//       ],
//     },
//     {
//       id: '00002',
//       title: 'Second',
//       notes: [
//         {
//           id: '00000003',
//           content: 'first note - proj 2',
//           isPinned: false,
//         },
//         {
//           id: '00000004',
//           content: 'second note - proj 2',
//           isPinned: false,
//         },
//         {
//           id: '00000003',
//           content: 'third note - proj 2',
//           isPinned: false,
//         },
//       ],
//     },
//     {
//       id: '00003',
//       title: 'Third',
//       notes: [
//         {
//           id: '00000006',
//           content: 'first note - proj 3',
//           isPinned: false,
//         },
//       ],
//     },
//   ],
// };
