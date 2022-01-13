import { LitElement, html } from 'lit';
import { ielouSidebarStyles } from './ielou-sidebar.styles.js';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';

export class IelouSidebar extends LitElement {
  static styles = [ielouStyles, ielouSidebarStyles];

  render() {
    return html`
      <ul class="list">
        <li class="list__item">
          <span class="list__item-name">Things to do</span>
          <span class="list__item-count">4</span>
        </li>
        <li class="list__item" active>
          <span class="list__item-name">New website</span>
          <span class="list__item-count">12</span>
        </li>
        <li class="list__item">
          <span class="list__item-name">Website redesign</span>
          <span class="list__item-count">3</span>
        </li>
      </ul>
      <div class="bottom-button">
        <button class="new-project-button">New Project</button>
      </div>
    `;
  }
}
