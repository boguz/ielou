export interface NoteInterface {
  id: string;
  content: string;
  isPinned: boolean;
}

export interface ProjectInterface {
  id: string;
  title: string;
  notes: NoteInterface[];
}

export type IelouStoreType = {
  activeProject: string | null;
  projects: ProjectInterface[];
};
