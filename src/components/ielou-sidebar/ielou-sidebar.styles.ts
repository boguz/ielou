import { css } from 'lit';
import { BREAKPOINT } from '../../config/constants.js';

export const ielouSidebarStyles = css`
  :host {
    box-sizing: border-box;
    background-color: var(--color-surface);
    grid-area: sidebar;
    width: 0;
    padding: var(--space-normal) 0;
    transition: all var(--transition-duration-normal) ease-in-out;
    overflow: hidden;
    position: relative;
  }

  :host([isvisible]) {
    width: var(--sidebar-width);
    padding: var(--space-normal);
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .list__item {
    height: var(--sidebar-list-item-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-text-secondary);
    position: relative;
    cursor: pointer;
  }

  .list__item--empty {
    font-size: var(--font-size-small);
    opacity: 0.5;
    pointer-events: none;
  }

  .list__item[active] {
    color: var(--color-primary);
  }

  .list__item[active]::after {
    content: '';
    width: var(--sidebar-active-marker-width);
    height: 100%;
    position: absolute;
    top: 0;
    right: calc(var(--space-normal) * -1);
    background-color: var(--color-primary);
  }

  .bottom-button {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: var(--space-normal);
    box-sizing: border-box;
    width: 100%;
  }

  .new-project-button {
    background-color: var(--color-primary);
    color: var(--color-surface);
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    padding: var(--space-half);
    border-radius: var(--border-radius-normal);
  }

  @media (hover: hover) {
    .list__item:hover {
      color: var(--color-primary-light);
    }

    .new-project-button:hover {
      background-color: var(--color-primary-light);
    }
  }

  @media screen and (min-width: ${BREAKPOINT}px) {
    :host {
      width: var(--sidebar-width);
      padding: var(--space-normal);
    }
  }
`;
