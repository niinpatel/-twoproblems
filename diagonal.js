/**
 * The program calculates diagonal of an input matrix and returns the absolute value of their difference.
 * Time complexity of this program O(n), where n is the length of input matrix.
 * @param matrix
 * @returns {number}
 */
function diagonalSum(matrix){
    var diagonal1 = 0;
    var diagonal2 = 0;
    length = matrix.length;

    for (var i = 0, j = length -1; i < length; i++, j--){
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][j];
    }


    return Math.abs(diagonal1 - diagonal2);
}


console.log(diagonalSum([[1,2,4],[5,0,1],[-6,2,-3]]));