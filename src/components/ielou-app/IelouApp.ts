import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { IelouStoreType } from '../../types/interfaces.js';
import { getStore, updateStore } from '../../store/store.js';
import { defaultStore } from '../../config/defaultStore.js';
import { ielouAppStyles } from './ielou-app.styles.js';

import '../ielou-topbar/ielou-topbar.js';
import '../ielou-sidebar/ielou-sidebar.js';
import '../ielou-stage/ielou-stage.js';

export class IelouApp extends LitElement {
  @property({ type: Array }) state: IelouStoreType = defaultStore;

  @property({ type: Boolean, reflect: true }) sidebarVisible = false;

  static styles = [ielouAppStyles];

  constructor() {
    super();

    if (!getStore()) {
      updateStore(defaultStore);
    }

    this.state = getStore();
    console.log('STORE', this.state);

    this._onUpdateStore = this._onUpdateStore.bind(this);
    this._onBurgerClick = this._onBurgerClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    // @ts-ignore
    window.addEventListener('ielou-update-store', this._onUpdateStore);
    window.addEventListener('burgton-button-state-change', this._onBurgerClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // @ts-ignore
    window.removeEventListener('ielou-update-store', this._onUpdateStore);
    window.removeEventListener(
      'burgton-button-state-change',
      this._onBurgerClick
    );
  }

  updateState() {
    this.state = getStore();
    console.log('Updates State', this.state);
  }

  _onBurgerClick() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  _onUpdateStore(event: CustomEvent) {
    updateStore(event.detail);
  }

  render() {
    return html`
      <ielou-topbar></ielou-topbar>
      <ielou-sidebar
        ?isVisible="${this.sidebarVisible}"
        .projects="${this.state.projects}"
        .activeProject="${this.state.activeProject}"
      >
      </ielou-sidebar>
      <ielou-stage></ielou-stage>
    `;
  }
}
