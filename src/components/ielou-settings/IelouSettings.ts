import { LitElement, html } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { ielouStyles } from '../ielou-styles/ielou-styles.js';
import { ielouSettingsStyles } from './ielou-settings.styles.js';
import { isValidImportData } from '../../utils/isValidImportData.js';

export class IelouSettings extends LitElement {
  static styles = [ielouStyles, ielouSettingsStyles];

  importButtonRef = createRef<HTMLInputElement>();

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
          <input
            type="file"
            class="setting__file-button"
            ${ref(this.importButtonRef)}
          />
        </div>
      </section>
    `;
  }

  /**
   * trigger a theme toggle
   */
  _onThemeToggleClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-toggle-theme-click', {
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Trigger an app data reset
   */
  _onResetButtonClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-reset-click', {
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Trigger app data export
   */
  _onExportButtonClick() {
    this.dispatchEvent(
      new CustomEvent('ielou-export-button-click', {
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Trigger app data import
   */
  _onImportButtonClick() {
    this.importButtonRef.value!.click();

    this.importButtonRef.value!.addEventListener('change', (event: Event) => {
      const input = event.target as HTMLInputElement;

      if (!input.files?.length) {
        console.error('Could not load file');
        return;
      }

      const reader: FileReader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const importData = JSON.parse(reader.result);
          if (isValidImportData(importData)) {
            this.dispatchEvent(
              new CustomEvent('ielou-import-data', {
                bubbles: true,
                composed: true,
                detail: {
                  importData: importData.projects,
                },
              })
            );
          } else {
            console.error('Import data is not valid!');
          }
        }
      };
      // @ts-ignore
      reader.readAsText(event.target.files[0]);
    });
  }
}
