//Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and num2). The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.

let dynamicFizzBuzz = function(max, num1, num2) {
    let nums = [];
    for (let i = 1; i < max; i++) {
        if ((i % num1 === 0 || i % num2 === 0) && !(i % num1 === 0 && i % num2 === 0 )) {
            nums.push(i);
        }
    }
    return nums;
}
