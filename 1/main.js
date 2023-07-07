const numbers = (...args) => {
    const calculateSum = (num1, num2) => {
        return num1 + num2;
    };

    const calculateMultiplication = (...args) => {
        let total = 1;
        for (const num of args) {
            total *= num;
        }
        return total;
    };


    const first = args[0];
    const second = args[1];

    return[calculateSum(first, second), calculateMultiplication(...args)];
}

console.log(numbers(7, 11, 13, 17, 19, 23));

