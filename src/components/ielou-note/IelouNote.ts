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

  private allowedKeysWhenFull: string[];

  contentRef = createRef<HTMLParagraphElement>();

  /**
   * Get text length
   */
  get getCount(): number {
    const contentText = this.contentRef.value!.textContent!.trim() || '';
    return contentText.length || 0;
  }

  constructor() {
    super();

    this.countTotal = 80;
    this.allowedKeysWhenFull = [
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

  /**
   * Trigger a note delete after confirmation when the delete button os pressed
   */
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

  /**
   * Trigger note pinned state toggle when the pin icon is clicked
   */
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

  /**
   * Make content editable when it is double clicked
   *
   * @param event
   */
  _onContentDoubleClick(event: Event) {
    const target = event.currentTarget as HTMLParagraphElement;
    target.setAttribute('contenteditable', '');
    target.focus();
  }

  /**
   * Target a note content update on note blur
   * @param event
   */
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

  /**
   * Update the note content length count whenever there is new input
   *
   * @param event
   */
  _onContentInput(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLParagraphElement;
    if (!target || !target.textContent || !target.textContent.trim().length)
      return 0;
    this.countCurrent = this.getCount;
    return null;
  }

  /**
   * When we are editing the note's content, on a key down:
   *  - prevent content to be longer as content's max length
   *  - On enter trigger blur to save changes
   *
   * @param event
   */
  _onContentKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLParagraphElement;
    const contentLength = target.textContent!.trim().length;
    const eventCode = event.code || event.key;
    if (
      contentLength >= this.countTotal &&
      !this.allowedKeysWhenFull.includes(eventCode)
    ) {
      event.preventDefault();
    } else if (event.code === 'Enter' || event.key === 'Enter') {
      target.blur();
    }
  }

  /**
   * Add key down events to the button icons to improve a11y
   *
   * @param event
   */
  _onButtonKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLButtonElement;
    if (event.code === 'Enter' || event.key === 'Enter') {
      target.click();
    }
  }
}
