// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
    let zeroCol = [];
    let zeroRow = [];
    // find the indexes(row, column) that are zeros
    for(let row = 0; row < matrix.length ; row++) {
        for(let col = 0; col < matrix.length ; col++) {
            let item = matrix[row][col];
            if(item === 0) {
                zeroCol.push(col);
                zeroRow.push(row);
                break;
            }
        }
    }
    matrix.forEach((row, i) => {
        zeroCol.forEach((colZero, j) => {
            if(i === zeroRow[j]) {
                row.forEach((v,i) => row[i] = 0)
            } else {
                row[colZero] = 0;
            }
        })
    });
}