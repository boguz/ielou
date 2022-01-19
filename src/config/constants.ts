/**
 * Name to be used on the local storate
 */
export const STORE_NAME = 'ielou_app';

/**
 * Breakpoint between mobile and desktop views
 */
export const BREAKPOINT = 640;

/**
 * Options to pass into the Date .toLocaleString method
 */
export const DATE_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const;
