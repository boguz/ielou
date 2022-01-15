import { css } from 'lit';

export const ielouNoteStyles = css`
  :host {
    position: relative;
    width: var(--note-width);
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    background-color: var(--color-surface);
    color: var(--color-text-primary);
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-bold);
    box-sizing: border-box;
    border-radius: var(--border-radius-normal);
  }

  :host([pinned]) {
    background-color: var(--color-pinned);
  }

  .buttons {
    position: absolute;
    top: var(--space-half);
    right: var(--space-half);
    display: grid;
    grid-template-columns: repeat(2, var(--note-icon-size));
    grid-gap: var(--space-half);
  }

  .button {
    height: var(--note-icon-size);
    width: var(--note-icon-size);
    background-color: var(--color-text-secondary);
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    cursor: pointer;
  }

  .button--delete {
    position: relative;
    top: -10%;
    mask-image: var(--ielou-icon-delete);
    -webkit-mask-image: var(--ielou-icon-delete);
  }

  .button--pin {
    mask-image: var(--ielou-icon-pin);
    -webkit-mask-image: var(--ielou-icon-pin);
  }

  .button--pin[active] {
    mask-image: var(--ielou-icon-pin-full);
    -webkit-mask-image: var(--ielou-icon-pin-full);
    background-color: var(--color-primary);
  }

  .content {
    border: 2px solid transparent;
    outline: none;
    text-align: center;
    margin: var(--space-half);
  }

  .content:focus {
    border-bottom: 2px dashed var(--color-primary);
  }

  @media (hover: hover) {
    .button:hover {
      background-color: var(--color-primary);
    }

    .button--pin[active]:hover {
      background-color: var(--color-primary-light);
    }
  }
`;
