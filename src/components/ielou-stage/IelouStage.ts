import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { ielouStageStyles } from './ielou-stage.styles.js';
import { NoteInterface, ProjectInterface } from '../../types/interfaces.js';
import { getRandomItemFromArray } from '../../utils/utils.js';
import { startPageSentences } from '../../config/randomSentences.js';

import '../ielou-note/ielou-note.js';

export class IelouStage extends LitElement {
  @property({ type: Object }) project: ProjectInterface | null = null;

  static styles = [ielouStyles, ielouStageStyles];

  get pinnedNotes(): NoteInterface[] {
    return this.project!.notes.filter(
      (note: NoteInterface) => note.isPinned === true
    );
  }

  get unpinnedNotes(): NoteInterface[] {
    return this.project!.notes.filter(
      (note: NoteInterface) => note.isPinned === false
    );
  }

  render() {
    if (this.project) {
      return html`
        <div class="header">
          <h2
            class="title"
            @dblclick="${this._onElementDoubleClick}"
            @blur="${this._onTitleBlur}"
            @keydown="${this._onElementKeyDown}"
          >
            ${this.project.title}
          </h2>
          <p class="date">${this.project.date}</p>
          <p
            class="description"
            @dblclick="${this._onElementDoubleClick}"
            @blur="${this._onDescriptionBlur}"
            @keydown="${this._onElementKeyDown}"
          >
            ${this.project.description}
          </p>
          <button
            class="delete-button"
            @click="${this._onDeleteButtonClick}"
          ></button>
        </div>
        <section class="notes">
          ${this.pinnedNotes.map(
            (note: NoteInterface) =>
              html`<ielou-note
                .note="${note}"
                ?pinned="${note.isPinned}"
              ></ielou-note>`
          )}
          ${this.unpinnedNotes.map(
            (note: NoteInterface) =>
              html`<ielou-note .note="${note}"></ielou-note>`
          )}
          <button
            class="new-note-button"
            @click="${this._onNewNoteButtonClick}"
          >
            New note
          </button>
        </section>
      `;
    }
    return html`
      <h2 class="no-project-selected">
        ${getRandomItemFromArray(startPageSentences)}
      </h2>
    `;
  }

  /**
   * Make either the project's title or description editable
   *
   * @param event
   */
  _onElementDoubleClick(event: MouseEvent) {
    const target = event.currentTarget as HTMLHeadingElement;
    target.setAttribute('contenteditable', '');
    target.focus();
  }

  /**
   * trigger project's title update
   *
   * @param event
   */
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

  /**
   * Trigger project's description update
   *
   * @param event
   */
  _onDescriptionBlur(event: FocusEvent) {
    const target = event.currentTarget as HTMLHeadingElement;
    this.dispatchEvent(
      new CustomEvent('ielou-update-project-description', {
        bubbles: true,
        composed: true,
        detail: {
          projectId: this.project!.id,
          newDescription: target.textContent,
        },
      })
    );
  }

  /**
   * Add key down event to the project's title and description to improve a11y
   *
   * @param event
   */
  _onElementKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLElement;
    if (event.key === 'Enter' || event.code === 'Enter') {
      target.blur();
    }
  }

  /**
   * Trigger project delete when the delete button is clicked
   */
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

  /**
   * Trigger add new note when the 'New note' button is clicked
   */
  _onNewNoteButtonClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-new-note-button-click', {
        bubbles: true,
        composed: true,
        detail: {
          projectId: this.project!.id,
        },
      })
    );
  }
}
