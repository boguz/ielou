/**
 * Note
 */
export interface NoteInterface {
  id: string;
  content: string;
  isPinned: boolean;
}

/**
 * Project
 */
export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  date: string;
  notes: NoteInterface[];
}

/**
 * App store
 */
export type IelouStoreType = {
  isDark: boolean;
  activeProject: string | null;
  projects: ProjectInterface[];
};

/**
 * Import and export data
 */
export interface ImportExportDataInterface {
  title: string;
  date: string;
  projects: ProjectInterface[];
}
