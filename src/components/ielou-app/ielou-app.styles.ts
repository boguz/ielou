import { css } from 'lit';

export const ielouAppStyles = css`
  :host {
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'topbar topbar'
      'sidebar stage';
    transition: all 2s ease-out;
  }
`;
