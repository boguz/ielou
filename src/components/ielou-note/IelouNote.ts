import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { NoteInterface } from '../../types/interfaces.js';
import { ielouNoteStyles } from './ielou-note.styles.js';

export class IelouNote extends LitElement {
  @property({ type: Object }) note: NoteInterface | null = null;

  static styles = [ielouStyles, ielouNoteStyles];

  render() {
    if (this.note) {
      return html`
        <div class="buttons">
          <div
            class="button button--delete"
            @click="${this._onDeleteButtonClick}"
            @keydown="${this._onButtonKeyDown}"
          ></div>
          <div
            class="button button--pin"
            ?active=${this.note.isPinned}
            @click="${this._onPinButtonClick}"
            @keydown="${this._onButtonKeyDown}"
          ></div>
        </div>
        <p
          class="content"
          @dblclick="${this._onContentDoubleClick}"
          @blur="${this._onContentBlur}"
          @keydown="${this._onContentKeyDown}"
        >
          ${this.note.content}
        </p>
      `;
    }
    return null;
  }

  _onDeleteButtonClick() {
    const deleteConfirmation = window.confirm(
      `Are you sure you want to delete this note?`
    );
    if (deleteConfirmation) {
      this.dispatchEvent(
        new CustomEvent('ielou-delete-note', {
          bubbles: true,
          composed: true,
          detail: {
            noteId: this.note!.id,
          },
        })
      );
    }
  }

  _onPinButtonClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-note-is-pinned-toggle', {
        bubbles: true,
        composed: true,
        detail: {
          noteId: this.note!.id,
        },
      })
    );
  }

  _onContentDoubleClick(event: Event) {
    const target = event.currentTarget as HTMLParagraphElement;
    target.setAttribute('contenteditable', '');
    target.focus();
  }

  _onContentBlur(event: Event) {
    const target = event.currentTarget as HTMLParagraphElement;
    this.dispatchEvent(
      new CustomEvent('ielou-update-note', {
        bubbles: true,
        composed: true,
        detail: {
          noteId: this.note!.id,
          newContent: target.textContent,
        },
      })
    );
  }

  _onContentKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLParagraphElement;
    if (event.code === 'Enter' || event.key === 'Enter') {
      target.blur();
    }
  }

  _onButtonKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLButtonElement;
    if (event.code === 'Enter' || event.key === 'Enter') {
      target.click();
    }
  }
}
