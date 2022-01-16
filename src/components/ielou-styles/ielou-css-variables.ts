import { css } from 'lit';
import { ielouCssIcons } from './ielou-css-icons.js';
import { BREAKPOINT } from '../../config/constants.js';

export const ielouCssVariables = [
  ielouCssIcons,
  css`
    :host {
      /* SPACING */
      --space-normal: 1rem;
      --space-double: 2rem;
      --space-half: 0.5rem;
      --space-quarter: 0.25rem;

      /* TRANSITION */
      --transition-duration-normal: 0.25s;

      /* BORDER-RADIUS */
      --border-radius-normal: 0.125rem;

      /* FONTS */
      --font-weight-medium: 500;
      --font-weight-bold: 700;
      --font-size-bigger: 1.75rem;
      --font-size-big: 1.25rem;
      --font-size-normal: 1rem;
      --font-size-small: 0.875rem;
      --font-size-smaller: 0.75rem;

      /* TOPBAR */
      --topbar-height: 3rem;
      --topbar-logo-height: 1.5rem;

      /* SIDEBAR */
      --sidebar-width: 100vw;
      --sidebar-list-item-height: 2rem;
      --sidebar-active-marker-width: 4px;

      /* STAGE */
      --delete-button-size: 1.5rem;

      /* NOTE */
      --note-width-min: 200px;
      --note-icon-size: 1.25rem;
    }

    @media screen and (min-width: ${BREAKPOINT}px) {
      :host {
        /* SIDEBAR */
        --sidebar-width: 320px;
      }
    }
  `,
];
