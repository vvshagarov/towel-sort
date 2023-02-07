
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  else {
    let allRange = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            allRange = allRange.concat(matrix[i]);
        }
        else {
            allRange = allRange.concat(matrix[i].reverse());
        }
    }
    return allRange;
  }
}
