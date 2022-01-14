import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { ielouStageStyles } from './ielou-stage.styles.js';
import { ProjectInterface } from '../../types/interfaces.js';

export class IelouStage extends LitElement {
  @property({ type: Object }) project: ProjectInterface | null = null;

  static styles = [ielouStyles, ielouStageStyles];

  render() {
    if (this.project) {
      return html`
        <div class="header">
          <h2
            class="title"
            @dblclick="${this._onTitleDoubleClick}"
            @blur="${this._onTitleBlur}"
            @keydown="${this._onTitleKeyDown}"
          >
            ${this.project.title}
          </h2>
          <button
            class="delete-button"
            @click="${this._onDeleteButtonClick}"
          ></button>
        </div>
        <section class="notes">notes</section>
      `;
    }
    return html` <h2 class="no-project-selected">Select a project...</h2> `;
  }

  _onTitleDoubleClick(event: MouseEvent) {
    const target = event.currentTarget as HTMLHeadingElement;
    target.setAttribute('contenteditable', '');
    target.focus();
  }

  _onTitleBlur(event: FocusEvent) {
    const target = event.currentTarget as HTMLHeadingElement;
    this.dispatchEvent(
      new CustomEvent('ielou-update-project-title', {
        bubbles: true,
        composed: true,
        detail: {
          projectId: this.project!.id,
          newTitle: target.textContent,
        },
      })
    );
  }

  _onTitleKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLHeadingElement;
    if (event.key === 'Enter' || event.code === 'Enter') {
      target.blur();
    }
  }

  _onDeleteButtonClick() {
    const deleteConfirmation = window.confirm(
      `Do you really want to delete the "${this.project!.title}" project?`
    );

    if (deleteConfirmation) {
      this.dispatchEvent(
        new CustomEvent('ielou-delete-project', {
          bubbles: true,
          composed: true,
          detail: {
            projectId: this.project!.id,
          },
        })
      );
    }
  }
}
