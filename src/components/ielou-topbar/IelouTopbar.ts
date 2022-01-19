import { LitElement, html } from 'lit';
// @ts-ignore
import BurgtonButton from 'burgton-button';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { ielouTopbarStyles } from './ielou-topbar.styles.js';

export class IelouTopbar extends LitElement {
  static styles = [ielouStyles, ielouTopbarStyles];

  render() {
    return html`
      <header class="header">
        <burgton-button type="arrow-left" class="burger"></burgton-button>
        <img
          src="./assets/logo.svg"
          alt="ielou app logo"
          class="logo"
          @click="${this._onLogoClick}"
          @keydown="${this._onLogoKeydown}"
        />
      </header>
    `;
  }

  constructor() {
    super();
    const existsBurgtonButton = BurgtonButton;
    if (!existsBurgtonButton) {
      console.error('Could not load the burger button!');
    }
  }

  /**
   * Trigger show the start page on logo click
   */
  _onLogoClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-show-start-page', {
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Add 'enter' key down to the logo to improve a11y
   *
   * @param event
   */
  _onLogoKeydown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLImageElement;
    if (event.code === 'Enter' || event.key === 'Enter') {
      target.click();
    }
  }
}
