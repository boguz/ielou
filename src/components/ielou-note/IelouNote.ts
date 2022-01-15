import { LitElement, html } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { property } from 'lit/decorators.js';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { NoteInterface } from '../../types/interfaces.js';
import { ielouNoteStyles } from './ielou-note.styles.js';

export class IelouNote extends LitElement {
  @property({ type: Object }) note: NoteInterface | null = null;

  @property({ type: Number }) countCurrent: number = 0;

  static styles = [ielouStyles, ielouNoteStyles];

  private countTotal: number;

  private allowKeysWhenFull: string[];

  contentRef = createRef<HTMLParagraphElement>();

  get getCount(): number {
    const contentText = this.contentRef.value!.textContent!.trim() || '';
    return contentText.length || 0;
  }

  constructor() {
    super();

    this.countTotal = 80;
    this.allowKeysWhenFull = [
      'Backspace',
      'ArrowRight',
      'ArrowLeft',
      'ArrowUp',
      'ArrowDown',
    ];
  }

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
          @input="${this._onContentInput}"
          ${ref(this.contentRef)}
        >
          ${this.note.content}
        </p>
        <div class="count">
          <span class="count__current">${this.countCurrent}</span>
          /
          <span class="count__total">${this.countTotal}</span>
        </div>
      `;
    }
    return null;
  }

  firstUpdated() {
    this.countCurrent = this.getCount;
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

  _onContentInput(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLParagraphElement;
    if (!target.textContent!.trim().length) return 0;
    this.countCurrent = this.getCount;
    return 0;
  }

  _onContentKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLParagraphElement;
    const contentLength = target.textContent!.trim().length;
    const eventCode = event.code || event.key;
    if (
      contentLength >= this.countTotal &&
      !this.allowKeysWhenFull.includes(eventCode)
    ) {
      event.preventDefault();
    } else if (event.code === 'Enter' || event.key === 'Enter') {
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
