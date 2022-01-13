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
      <ul class="list">
        ${this.projects!.length
          ? this.projects!.map((project: ProjectInterface) =>
              this._renderListItem(project)
            )
          : this._renderNoProjectsMessage()}
      </ul>
      <div class="bottom-button">
        <button class="new-project-button">New Project</button>
      </div>
    `;
  }

  _renderListItem(project: ProjectInterface) {
    return html`
      <li
        class="list__item"
        id="${project.id}"
        ?active="${project.id === this.activeProject}"
      >
        <span class="list__item-name">${project.title}</span>
        <span class="list__item-count">${project.notes.length}</span>
      </li>
    `;
  }

  _renderNoProjectsMessage() {
    return html`
      <li class="list__item list__item--empty">
        No projects yet. Click the "New Project" button to get started
      </li>
    `;
  }
}
