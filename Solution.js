'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
    
  const n = matrix.length / 2; 
    let maxSum = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            maxSum += Math.max(
                matrix[i][j],                     
                matrix[i][2*n-1-j],              
                matrix[2*n-1-i][j],              
                matrix[2*n-1-i][2*n-1-j]         
            );
        }
    }
    
    return maxSum;
}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        let matrix = Array(2 * n);

        for (let i = 0; i < 2 * n; i++) {
            matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
        }

        const result = flippingMatrix(matrix);

        ws.write(result + '\n');
    }

    ws.end();
}
