import { LitElement, html } from 'lit';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { ielouStageStyles } from './ielou-stage.styles.js';

export class IelouStage extends LitElement {
  static styles = [ielouStyles, ielouStageStyles];

  render() {
    return html` <main>STAGE</main> `;
  }
}
