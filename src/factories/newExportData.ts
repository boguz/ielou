import {
  ImportExportDataInterface,
  ProjectInterface,
} from '../types/interfaces.js';
import { DATE_OPTIONS } from '../config/constants.js';

/**
 * Export app's data as JSON so we can then save it to a JSON file
 *
 * @param data
 * @returns {JSON} Stringified app export data
 */
export function createExportDataAsJSON(data: ProjectInterface[]) {
  const exportData: ImportExportDataInterface = {
    title: 'ielou app export',
    date: new Date().toLocaleString(undefined, DATE_OPTIONS),
    projects: data,
  };
  return JSON.stringify(exportData);
}
