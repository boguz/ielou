/**
 * Get a random item from an array
 *
 * @param arrayToSearch
 * @returns Single array item
 */
export function getRandomItemFromArray(arrayToSearch: any[]) {
  return arrayToSearch[Math.floor(Math.random() * arrayToSearch.length)];
}
