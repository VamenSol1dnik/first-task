function multiplyOddByMin(matrix) {
    let min = Infinity;
  
    
    for (let row of matrix) {
      for (let value of row) {
        if (value < min) {
          min = value;
        }
      }
    }
  
    
    let resultMatrix = matrix.map(row =>
      row.map(value => value % 2 !== 0 ? value * min : value)
    );
  
    return resultMatrix;
  }
  
  
  const originalMatrix = [
    [5, 3, 6],
    [7, 11, 2],
    [15, 9, 4]
  ];
  
  const modifiedMatrix = multiplyOddByMin(originalMatrix);
  console.log(modifiedMatrix);