import { css } from 'lit';

export const ielouTopbarStyles = css`
  :host {
    box-sizing: border-box;
    background-color: var(--color-surface);
    height: var(--topbar-height);
    width: 100%;
    display: flex;
    align-items: center;
    grid-area: topbar;
    padding: 0 var(--space-normal);
  }

  .header {
    display: flex;
    align-items: center;
  }

  .burger {
    --burgton-button-line-color: var(--color-primary);
    --burgton-button-line-color-active: var(--color-primary);
    --burgton-button-animation-duration: var(--transition-duration-normal);
    margin-right: var(--space-normal);
  }

  .logo {
    height: var(--topbar-logo-height);
    width: auto;
  }

  @media (hover: hover) {
    .burger:hover {
      --burgton-button-line-color: var(--color-primary-light);
      --burgton-button-line-color-active: var(--color-primary-light);
    }
  }
`;
