import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ielouSidebarStyles } from './ielou-sidebar.styles.js';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { ProjectInterface } from '../../types/interfaces.js';

export class IelouSidebar extends LitElement {
  @property({ type: String }) activeProject: string | null = null;

  @property({ type: Array }) projects: ProjectInterface[] | null = null;

  static styles = [ielouStyles, ielouSidebarStyles];

  render() {
    return html`
      <div class="list-container">
        <ul class="list">
          ${this.projects!.length
            ? this.projects!.map((project: ProjectInterface) =>
                this._renderListItem(project)
              )
            : this._renderNoProjectsMessage()}
        </ul>
        <button
          class="new-project-button"
          @click="${this._onNewProjectButtonClick}"
        >
          New Project
        </button>
      </div>
      <div class="bottom-buttons">
        <button class="settings-button" @click="${this._onSettingsButtonClick}">
          Settings
        </button>
      </div>
    `;
  }

  _renderListItem(project: ProjectInterface) {
    return html`
      <li
        class="list__item"
        id="${project.id}"
        ?active="${project.id === this.activeProject}"
        @click="${this._onListItemClick}"
        @keyDown="${this._onListItemKeyDown}"
      >
        <span class="list__item-name">${project.title}</span>
        <span class="list__item-count">${project.notes.length}</span>
      </li>
    `;
  }

  _renderNoProjectsMessage() {
    return html`
      <li class="list__item list__item--empty">
        No projects yet. Click the "New Project" button to get started...
      </li>
    `;
  }

  _onNewProjectButtonClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-new-project-button-click', {
        bubbles: true,
        composed: true,
      })
    );
  }

  _onListItemClick(event: MouseEvent) {
    const target = event.currentTarget as HTMLDListElement;
    this.dispatchEvent(
      new CustomEvent('ielou-select-project', {
        bubbles: true,
        composed: true,
        detail: {
          selectedProject: target.getAttribute('id'),
        },
      })
    );
  }

  _onListItemKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLDListElement;
    if (event.code === 'Enter' || event.key === 'Enter') {
      target.click();
    }
  }

  _onSettingsButtonClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-settings-button-click', {
        bubbles: true,
        composed: true,
      })
    );
  }
}
