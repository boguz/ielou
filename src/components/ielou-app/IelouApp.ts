import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class IelouApp extends LitElement {
  @property({ type: String }) title = 'ielou';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html` <main>🦄 ${this.title} app running...</main> `;
  }
}
