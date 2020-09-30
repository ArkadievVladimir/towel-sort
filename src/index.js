
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    matrix.map((item, index) => {
        if (index % 2 !== 0) {
          matrix[index] = matrix[index].reverse();
        }
      })
    
      return matrix.reduce(function(flat, current) { return flat.concat(current); }, []);
}
