import {
  ImportExportDataInterface,
  ProjectInterface,
} from '../types/interfaces.js';

export function createExportData(
  data: ProjectInterface[]
): ImportExportDataInterface {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;

  return {
    title: 'ielou app export',
    date: new Date().toLocaleString(undefined, dateOptions),
    projects: data,
  };
}
