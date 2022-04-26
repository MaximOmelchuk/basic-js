const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arrInit) {
  if (!Array.isArray(arrInit)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  let arr = [...arrInit];

  
  for (let i=0; i<arr.length; i++) {

    if (arr[i] == '--discard-next') {
      arr[i] = 'del';
      arr[i+1] = 'del'
    }

    if (arr[i] == '--discard-prev') {
      arr[i] = 'del';
      arr[i-1] = 'del'
      i--;
    }


    if (arr[i] == '--double-prev') {
      arr[i] = 'del';
      arr.splice(i-1, 0, arr[i-1]);
      i++;
    }

    if (arr[i] == '--double-next') {
      arr[i] = 'del';
      arr.splice(i+1, 0, arr[i+1]);
      i++;
    }
  }

  return arr.filter(x=>x!=='del' && x!==undefined )
}

module.exports = {
  transform
};
