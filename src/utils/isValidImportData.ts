import { ImportExportDataInterface } from '../types/interfaces.js';

/**
 * Check if data to import is valid. Data is valid if:
 *  - has correct 'title',
 *  - has a 'projects' property
 *
 * @param importData
 * @returns {boolean} Boolean if data is valid or not
 */
export function isValidImportData(
  importData: ImportExportDataInterface
): Boolean {
  return (
    importData.title === 'ielou app export' &&
    Object.prototype.hasOwnProperty.call(importData, 'projects')
  );
}
