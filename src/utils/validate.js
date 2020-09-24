/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  return true
}

/**
 * @param {string} str
 * @returns {boolean} 
 */
export function validPhone(str) {
  return /^(18|15|16)[0-9]{9}$/.test(str);
}

/**
 * @param {string} str
 * @returns {boolean} 
 */
export function validEmail(str) {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return reg.test(str);
}

/**
 * @param {array} numArray
 * @returns {boolean}
 */
export function validNumber(numArray) {
  let validRes = true;
  const regex = /^\d+(\.\d+)?$/;
  if (!numArray.length || numArray.length === 0) return false;
  for (let inner in numArray) validRes = validRes && regex.test(numArray[inner]);
  return validRes;
}
