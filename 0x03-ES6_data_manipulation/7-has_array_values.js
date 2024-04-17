/**
 * hasValuesFromArray - Checks if all elements in an array exist in a set
 * @param {Set} set - To set the array
 * @param {Array} array - The source array
 *
 * @returns {Boolean} - Returns true if all elements in the array exist in the set,
 *  false otherwise
 *
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
