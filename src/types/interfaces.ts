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
