import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import {
  IelouStoreType,
  NoteInterface,
  ProjectInterface,
} from '../../types/interfaces.js';
import { getStore, updateStore } from '../../store/store.js';
import { defaultStore } from '../../config/defaultStore.js';
import { ielouAppStyles } from './ielou-app.styles.js';

import '../ielou-topbar/ielou-topbar.js';
import '../ielou-sidebar/ielou-sidebar.js';
import '../ielou-stage/ielou-stage.js';
import { createProject } from '../../factories/newProject.js';
import { createNote } from '../../factories/newNote.js';

export class IelouApp extends LitElement {
  @property({ type: Array }) state: IelouStoreType = defaultStore;

  @property({ type: Boolean, reflect: true }) sidebarVisible = false;

  static styles = [ielouAppStyles];

  get activeProject(): ProjectInterface | null {
    if (!this.state || !this.state.activeProject || !this.state.projects.length)
      return null;

    return (
      this.state.projects.find(
        project => project.id === this.state.activeProject
      ) || null
    );
  }

  constructor() {
    super();

    if (!getStore()) {
      updateStore(defaultStore);
    }

    this.state = getStore();
    console.log('STORE', this.state);

    this._onUpdateStore = this._onUpdateStore.bind(this);
    this._onBurgerClick = this._onBurgerClick.bind(this);
    this._onNewProjectButtonClick = this._onNewProjectButtonClick.bind(this);
    this._onSelectProject = this._onSelectProject.bind(this);
    this._onUpdateProjectTitle = this._onUpdateProjectTitle.bind(this);
    this._onUpdateProjectDescription =
      this._onUpdateProjectDescription.bind(this);
    this._onDeleteProject = this._onDeleteProject.bind(this);
    this._onNewNoteButtonClick = this._onNewNoteButtonClick.bind(this);
    this._onNoteDeleteClick = this._onNoteDeleteClick.bind(this);
    this._onNoteIsPinnedToggle = this._onNoteIsPinnedToggle.bind(this);
    this._onUpdateNote = this._onUpdateNote.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    // @ts-ignore
    window.addEventListener('ielou-update-store', this._onUpdateStore);
    window.addEventListener('burgton-button-state-change', this._onBurgerClick);
    this.addEventListener(
      'ielou-new-project-button-click',
      this._onNewProjectButtonClick
    );
    this.addEventListener('ielou-select-project', this._onSelectProject);
    this.addEventListener(
      'ielou-update-project-title',
      this._onUpdateProjectTitle
    );
    this.addEventListener(
      'ielou-update-project-description',
      this._onUpdateProjectDescription
    );
    this.addEventListener('ielou-delete-project', this._onDeleteProject);
    this.addEventListener(
      'ielou-new-note-button-click',
      this._onNewNoteButtonClick
    );
    this.addEventListener('ielou-delete-note', this._onNoteDeleteClick);
    this.addEventListener(
      'ielou-note-is-pinned-toggle',
      this._onNoteIsPinnedToggle
    );
    this.addEventListener('ielou-update-note', this._onUpdateNote);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // @ts-ignore
    window.removeEventListener('ielou-update-store', this._onUpdateStore);
    window.removeEventListener(
      'burgton-button-state-change',
      this._onBurgerClick
    );
    this.removeEventListener(
      'ielou-new-project-button-click',
      this._onNewProjectButtonClick
    );
    this.removeEventListener('ielou-select-project', this._onSelectProject);
    this.removeEventListener(
      'ielou-update-project-title',
      this._onUpdateProjectTitle
    );
    this.removeEventListener(
      'ielou-update-project-description',
      this._onUpdateProjectDescription
    );
    this.removeEventListener('ielou-delete-project', this._onDeleteProject);
    this.removeEventListener(
      'ielou-new-note-button-click',
      this._onNewNoteButtonClick
    );
    this.removeEventListener('ielou-delete-note', this._onNoteDeleteClick);
    this.removeEventListener(
      'ielou-note-is-pinned-toggle',
      this._onNoteIsPinnedToggle
    );
    this.removeEventListener('ielou-update-note', this._onUpdateNote);
  }

  updateState() {
    this.state = getStore();
    console.log('Updated State', this.state);
  }

  _onBurgerClick() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  _onUpdateStore(newState: IelouStoreType) {
    updateStore(newState);
    this.updateState();
  }

  _onNewProjectButtonClick() {
    const newProject = createProject();
    const newState = this.state;
    newState.projects.push(newProject);
    newState.activeProject = newProject.id;
    this._onUpdateStore(newState);
  }

  _onSelectProject(event: Event) {
    const newState = this.state;
    newState.activeProject = (<CustomEvent>event).detail.selectedProject;
    this._onUpdateStore(newState);
  }

  _onUpdateProjectTitle(event: Event) {
    const { projectId, newTitle } = (<CustomEvent>event).detail;
    const newState = this.state;
    const newProjects = newState.projects.map(project => {
      if (project.id === projectId) {
        const editedProject = project;
        editedProject.title = newTitle.trim();
      }
      return project;
    });
    newState.projects = newProjects;
    this._onUpdateStore(newState);
  }

  _onUpdateProjectDescription(event: Event) {
    const { projectId, newDescription } = (<CustomEvent>event).detail;
    const newState = this.state;
    const newProjects = newState.projects.map(project => {
      if (project.id === projectId) {
        const editedProject = project;
        editedProject.description = newDescription.trim();
      }
      return project;
    });
    newState.projects = newProjects;
    this._onUpdateStore(newState);
  }

  _onDeleteProject(event: Event) {
    const newState = this.state;
    const { projectId } = (<CustomEvent>event).detail;
    newState.projects = newState.projects.filter(
      project => project.id.toString() !== projectId.toString()
    );
    newState.activeProject = null;
    this._onUpdateStore(newState);
  }

  _onNewNoteButtonClick(event: Event) {
    const { projectId } = (<CustomEvent>event).detail;
    const newNote = createNote();
    const newState = this.state;
    newState.projects.map((project: ProjectInterface) => {
      if (project.id === projectId) {
        project.notes.push(newNote);
      }
      return project;
    });
    this._onUpdateStore(newState);
  }

  _onNoteDeleteClick(event: Event) {
    const { noteId } = (<CustomEvent>event).detail;
    const newState = this.state;
    newState.projects = newState.projects.map((project: ProjectInterface) => {
      project.notes = project.notes.filter(
        (note: NoteInterface) => note.id.toString() !== noteId.toString()
      );
      return project;
    });
    this._onUpdateStore(newState);
  }

  _onNoteIsPinnedToggle(event: Event) {
    const { noteId } = (<CustomEvent>event).detail;
    const newState = this.state;
    newState.projects = newState.projects.map((project: ProjectInterface) => {
      project.notes = project.notes.map((note: NoteInterface) => {
        if (note.id.toString() === noteId.toString()) {
          note.isPinned = !note.isPinned;
        }
        return note;
      });
      return project;
    });
    this._onUpdateStore(newState);
  }

  _onUpdateNote(event: Event) {
    const { noteId, newContent } = (<CustomEvent>event).detail;
    const newState = this.state;
    newState.projects = newState.projects.map((project: ProjectInterface) => {
      project.notes = project.notes.map((note: NoteInterface) => {
        if (note.id.toString() === noteId.toString()) {
          note.content = newContent;
        }
        return note;
      });
      return project;
    });
    this._onUpdateStore(newState);
  }

  render() {
    return html`
      <ielou-topbar></ielou-topbar>
      <ielou-sidebar
        ?isVisible="${this.sidebarVisible}"
        .projects="${this.state.projects}"
        .activeProject="${this.state.activeProject}"
      >
      </ielou-sidebar>
      <ielou-stage .project="${this.activeProject}"></ielou-stage>
    `;
  }
}
