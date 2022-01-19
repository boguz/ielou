import { css } from 'lit';

/**
 * styles for the ielou-settings component
 */
export const ielouSettingsStyles = css`
  :host {
    box-sizing: border-box;
    background-color: var(--color-bg);
    grid-area: stage;
    padding: var(--space-normal);
  }

  .header {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-areas:
      'title delete'
      'date date'
      'description description';
    grid-template-columns: 1fr auto;
    margin-bottom: var(--space-normal);
  }

  .title {
    grid-area: title;
    font-size: var(--font-size-bigger);
    color: var(--color-text-primary);
    margin: 0;
    outline: none;
    border-bottom: 2px transparent;
  }

  .setting {
    margin-bottom: var(--space-double);
  }

  .setting__title {
    color: var(--color-text-primary);
    margin: 0;
  }

  .setting__description {
    color: var(--color-text-secondary);
    margin: 0;
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-small);
  }

  .setting__button {
    border: none;
    margin-top: var(--space-half);
    background-color: var(--color-primary);
    color: var(--color-bg);
    padding: var(--space-half);
    border-radius: var(--border-radius-normal);
    cursor: pointer;
    appearance: none;
  }

  .setting__file-button {
    display: none;
  }

  @media (hover: hover) {
    .setting__button:hover {
      background-color: var(--color-primary-light);
    }
  }

  @media screen and (min-width: 840px) {
    :host {
      padding: var(--space-normal) var(--space-double) var(--space-double)
        calc(var(--sidebar-width) + var(--space-double));
    }
  }
`;
