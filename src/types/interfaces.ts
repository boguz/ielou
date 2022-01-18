export interface NoteInterface {
  id: string;
  content: string;
  isPinned: boolean;
}

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  date: string;
  notes: NoteInterface[];
}

export type IelouStoreType = {
  isDark: boolean;
  activeProject: string | null;
  projects: ProjectInterface[];
};

export interface ImportExportDataInterface {
  title: string;
  date: string;
  projects: ProjectInterface[];
}
