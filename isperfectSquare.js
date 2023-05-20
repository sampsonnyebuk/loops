//Write a function isPerfectSquare that accepts a number as an argument. The method should return a boolean indicating whether or not the argument is a perfect square. A perfect square is a number that is the product of some number multiplied by itself.

function isPerfectSquare(num){
    for (let i = 1; i <= num; i++){
        if (i * i === num){
            return true;
        }
    }
    return false;
}
