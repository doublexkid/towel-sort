
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return []
  } else {
    for (let j = 1; j < matrix.length; j += 2) {
      matrix[j].reverse();
    }
  }
  return matrix.flat(Infinity);
}
