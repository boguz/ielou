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
import '../ielou-settings/ielou-settings.js';
import { createProject } from '../../factories/newProject.js';
import { createNote } from '../../factories/newNote.js';
import { createExportData } from '../../factories/newExportData.js';

export class IelouApp extends LitElement {
  @property({ type: Array }) state: IelouStoreType = defaultStore;

  @property({ type: Boolean, reflect: true }) sidebarVisible = false;

  @property({
    type: Boolean,
    hasChanged: (value: boolean) => {
      value
        ? document.documentElement.setAttribute('isDark', '')
        : document.documentElement.removeAttribute('isDark');
      return value;
    },
  })
  isDark = false;

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
    this.isDark = this.state.isDark;
    // console.log('STORE', this.state);

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
    this._onShowStartPage = this._onShowStartPage.bind(this);
    this._onSettingsButtonClick = this._onSettingsButtonClick.bind(this);
    this._onSettingsThemeToggleClick =
      this._onSettingsThemeToggleClick.bind(this);
    this._onResetClick = this._onResetClick.bind(this);
    this._onExportButtonClick = this._onExportButtonClick.bind(this);
    this._onImportData = this._onImportData.bind(this);
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
    this.addEventListener('ielou-show-start-page', this._onShowStartPage);
    this.addEventListener(
      'ielou-settings-button-click',
      this._onSettingsButtonClick
    );
    this.addEventListener(
      'ielou-toggle-theme-click',
      this._onSettingsThemeToggleClick
    );
    this.addEventListener('ielou-reset-click', this._onResetClick);
    this.addEventListener(
      'ielou-export-button-click',
      this._onExportButtonClick
    );
    this.addEventListener('ielou-import-data', this._onImportData);
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
    this.removeEventListener('ielou-show-start-page', this._onShowStartPage);
    this.removeEventListener(
      'ielou-settings-button-click',
      this._onSettingsButtonClick
    );
    this.removeEventListener(
      'ielou-toggle-theme-click',
      this._onSettingsThemeToggleClick
    );
    this.removeEventListener('ielou-reset-click', this._onResetClick);
    this.removeEventListener(
      'ielou-export-button-click',
      this._onExportButtonClick
    );
    this.removeEventListener('ielou-import-data', this._onImportData);
  }

  updateState() {
    this.state = getStore();
    this.isDark = this.state.isDark;
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

  _onShowStartPage() {
    const newState = this.state;
    newState.activeProject = null;
    this._onUpdateStore(newState);
  }

  _onSettingsButtonClick() {
    const newState = this.state;
    newState.activeProject = 'settings';
    this._onUpdateStore(newState);
  }

  _onSettingsThemeToggleClick() {
    const newState = this.state;
    newState.isDark = !newState.isDark;
    this._onUpdateStore(newState);
  }

  _onResetClick() {
    const resetConfirmation = window.confirm(
      'Do you really want to reset your data? This will permanently delete all of your projects and notes.'
    );
    if (resetConfirmation) {
      const newState = this.state;
      newState.projects = [];
      this._onUpdateStore(newState);
    }
  }

  _onExportButtonClick() {
    const newExportData = createExportData(this.state.projects);
    const dataStr = JSON.stringify(newExportData);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`;
    const exportFileDefaultName = 'ielouAppExport.json';
    const fakeLinkElement = document.createElement('a');
    fakeLinkElement.setAttribute('href', dataUri);
    fakeLinkElement.setAttribute('download', exportFileDefaultName);
    fakeLinkElement.click();
  }

  _onImportData(event: Event) {
    const { importData } = (<CustomEvent>event).detail;
    const newState = this.state;
    const newProjects = newState.projects;

    // Add only projects that don't already exist
    importData.forEach((project: ProjectInterface) => {
      const projectAlreadyExists = newProjects.filter(
        (newProject: ProjectInterface) => newProject.id === project.id
      );
      if (!projectAlreadyExists.length) {
        newProjects.push(project);
      }
    });

    newState.projects = newProjects;
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
      ${this.state.activeProject === 'settings'
        ? html`<ielou-settings></ielou-settings>`
        : html`<ielou-stage .project="${this.activeProject}"></ielou-stage>`}
    `;
  }
}
