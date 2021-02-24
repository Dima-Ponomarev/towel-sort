
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const sortedArr = [];
  if (matrix){
    matrix.forEach((row, index) => {
      if (index % 2 === 0){
        row.sort((a, b) => a - b);
        sortedArr.push(...row);
      } else {
        row.sort((a, b) => b - a);
        sortedArr.push(...row);
      }
    });
  }
  
  return sortedArr;
}
