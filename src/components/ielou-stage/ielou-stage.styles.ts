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
    grid-area: delete;
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

  .date {
    grid-area: date;
    margin: 0;
    font-size: var(--font-size-small);
    color: var(--color-text-secondary);
  }

  .description {
    grid-area: description;
    margin: var(--space-normal) 0;
    color: var(--color-text-primary);
    border-bottom: 2px transparent;
    outline: none;
  }

  .description:focus {
    border-bottom: 2px dashed var(--color-primary);
  }

  .notes {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--note-width-min), 1fr)
    );
    grid-gap: var(--space-normal);
  }

  .new-note-button {
    width: var(--note-width);
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    background-color: transparent;
    color: var(--color-text-secondary);
    border: 4px dashed var(--color-text-secondary);
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    box-sizing: border-box;
    border-radius: var(--border-radius-normal);
  }

  @media (hover: hover) {
    .delete-button:hover {
      background-color: var(--color-primary);
    }

    .new-note-button:hover {
      border: 4px dashed var(--color-primary);
      color: var(--color-primary);
    }
  }

  @media screen and (min-width: 840px) {
    :host {
      padding: var(--space-normal) var(--space-double) var(--space-double);
    }
  }
`;
