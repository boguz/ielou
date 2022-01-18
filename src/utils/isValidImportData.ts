import { ImportExportDataInterface } from '../types/interfaces.js';

export function isValidImportData(
  importData: ImportExportDataInterface
): Boolean {
  console.log('ccccc', typeof importData.projects);
  return (
    importData.title === 'ielou app export' &&
    Object.prototype.hasOwnProperty.call(importData, 'projects')
  );
}
