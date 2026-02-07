// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

export default function rotateMatrix (matrix: Matrix) {
    for (let j = 0; j < matrix.length; j++) {
        for (let i = j+1; i < matrix.length; i++) {
            // we need to swap the items
            const item = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = item;
        }
    }
    matrix.map(row => row.reverse());
}