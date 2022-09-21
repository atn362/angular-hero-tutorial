const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

function onClick() {
    const input = parseFloat(inputElement.value);
    if (isNaN(input)) {
        outputElement.innerText = "input must be a number";
        return;
    }

    outputElement.innerText = fizzBuzz(input);
}

function fizzBuzz(num) {
    const isFactorOfThree = num % 3 === 0 ? true : false;
    const isFactorOfFive = num % 5 === 0 ? true : false;

    if (isFactorOfThree && isFactorOfFive) {
        return "FizzBuzz";
    }
    if (isFactorOfThree) {
        return "Fizz";
    }
    if (isFactorOfFive) {
        return "Buzz";
    }

    return num;
}