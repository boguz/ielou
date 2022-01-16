/**
 * Get a random item from an array
 *
 * @param arrayToSearch
 */
export function getRandomItemFromArray(arrayToSearch: any[]) {
  return arrayToSearch[Math.floor(Math.random() * arrayToSearch.length)];
}
