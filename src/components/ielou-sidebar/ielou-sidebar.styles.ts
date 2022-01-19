import { css } from 'lit';
import { BREAKPOINT } from '../../config/constants.js';

/**
 * Styles for the ielou-sidebar component
 */
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
    display: flex;
    flex-direction: column;
  }

  :host([isvisible]) {
    width: var(--sidebar-width);
    padding: var(--space-normal);
  }

  .list-container {
    flex-grow: 1;
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
    gap: var(--space-half);
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

  .list__item-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .new-project-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: var(--space-double);
    padding: var(--space-half);
    background-color: var(--color-surface);
    color: var(--color-text-secondary);
    border: 3px dashed var(--color-text-secondary);
    border-radius: var(--border-radius-normal);
    cursor: pointer;
    outline: none;
    font-weight: var(--font-weight-bold);
  }

  .settings {
    border: 3px solid red;
  }

  .bottom-buttons {
    margin-top: var(--space-double);
  }

  .settings-button {
    border: none;
    background-color: transparent;
    color: var(--color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
    font-weight: var(--font-weight-bold);
    cursor: pointer;
  }

  @media (hover: hover) {
    .list__item:hover {
      color: var(--color-primary-light);
    }

    .new-project-button:hover {
      border: 3px dashed var(--color-primary);
      color: var(--color-primary);
    }

    .settings-button:hover {
      color: var(--color-primary);
    }
  }

  @media screen and (min-width: ${BREAKPOINT}px) {
    :host {
      position: fixed;
      top: var(--topbar-height);
      height: calc(100vh - var(--topbar-height));
      width: var(--sidebar-width);
      padding: var(--space-normal);
      overflow-y: scroll;
    }
  }
`;
