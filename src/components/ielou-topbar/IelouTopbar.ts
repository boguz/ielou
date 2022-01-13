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
        <img src="./dist/assets/logo.svg" alt="ielou app logo" class="logo" />
      </header>
    `;
  }

  constructor() {
    super();
    const existsBurgtonButton = BurgtonButton;
    if (!existsBurgtonButton) {
      console.log('could not load the burger button!');
    }
  }
}
