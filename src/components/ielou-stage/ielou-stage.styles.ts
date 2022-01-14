import { css } from 'lit';

export const ielouStageStyles = css`
  :host {
    box-sizing: border-box;
    background-color: var(--color-background);
    grid-area: stage;
    padding: var(--space-normal);
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-normal);
  }

  .title {
    font-size: var(--font-size-big);
    color: var(--color-text-primary);
    margin: 0;
    outline: none;
    border-bottom: 2px transparent;
  }

  .title:focus {
    border-bottom: 2px dashed var(--color-primary);
  }

  .no-project-selected {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0.125;
    margin: 0;
  }

  .delete-button {
    border: none;
    outline: none;
    height: var(--delete-button-size);
    width: var(--delete-button-size);
    background-color: var(--color-text-secondary);
    mask-position: center;
    -webkit-mask-position: center;
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-image: var(--ielou-icon-delete);
    -webkit-mask-image: var(--ielou-icon-delete);
    cursor: pointer;
  }

  @media (hover: hover) {
    .delete-button:hover {
      background-color: var(--color-primary);
    }
  }
`;
