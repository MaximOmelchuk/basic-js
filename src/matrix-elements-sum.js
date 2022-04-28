const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {

  let arrCopy = [...arr]
  let sum = 0;

  arr.forEach((x,i)=>{
    x.forEach((y,j)=>{
      
      if (y==0) {
        let tmp = i;
        while (arr[tmp+1] !== undefined) {
          arrCopy[tmp+1][j]=0;
          tmp++;
        }
      }  
    })
  });

  arrCopy.forEach(x=>{
        x.forEach(y=>{
          sum+=y;
        })
  })

  return sum;
}


module.exports = {
  getMatrixElementsSum
};
