import { LitElement, html } from 'lit';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { ielouSettingsStyles } from './ielou-settings.styles.js';

export class IelouSettings extends LitElement {
  static styles = [ielouStyles, ielouSettingsStyles];

  render() {
    return html`
      <div class="header">
        <h2 class="title">Settings</h2>
      </div>
      <section class="settings">
        <div class="setting">
          <h4 class="setting__title">Dark mode</h4>
          <p class="setting__description">Turn dark mode on or off</p>
          <button class="setting__button" @click="${this._onThemeToggleClick}">
            Toggle dark mode
          </button>
        </div>
        <div class="setting">
          <h4 class="setting__title">Reset</h4>
          <p class="setting__description">
            Reset the app to the original state by removing all projects, notes
            and settings
          </p>
          <button class="setting__button" @click="${this._onResetButtonClick}">
            Reset
          </button>
        </div>
        <div class="setting">
          <h4 class="setting__title">Export data</h4>
          <p class="setting__description">
            Export your data as a JSON file (as backup or to use in another
            computer)
          </p>
          <button class="setting__button" @click="${this._onExportButtonClick}">
            Export
          </button>
        </div>
        <div class="setting">
          <h4 class="setting__title">Import data</h4>
          <p class="setting__description">
            Import data from a JSON file. This data will be merged with your
            current data
          </p>
          <button class="setting__button" @click="${this._onImportButtonClick}">
            Import
          </button>
        </div>
      </section>
    `;
  }

  _onThemeToggleClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-toggle-theme', {
        bubbles: true,
        composed: true,
      })
    );
  }

  _onResetButtonClick() {
    console.log('RESET CLICK');
  }

  _onExportButtonClick() {
    console.log('EXPORT CLICK');
  }

  _onImportButtonClick() {
    console.log('IMPORT CLICK');
  }
}
