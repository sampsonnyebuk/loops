//Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. The function should print out numbers between min and max at step intervals.

function logBetweenStepper(min, max, step) {
    for (let i = min; i <= max; i += step){
        console.log(i)
    }
}

// Examples:
logBetweenStepper(5, 9, 1);
