//creates the title by manipulating the DOM
const title = document.getElementById('title')
title.innerText = 'FizzBuzz'
//Grabs the number from the input
const numElement = document.getElementById('num');
//grabs the result so that it can be printed to the page
const resultElement = document.getElementById('results')

function onClick() {

    const num = parseFloat(numElement.value);
    console.log(numElement.value)

    if (isNaN(num)) {
        return resultElement.innerText = 'Please input a number'
    } else if ((num % 15) == 0) {
        return resultElement.innerText = 'FizzBuzz';
    } else if ((num % 5) == 0) {
        return resultElement.innerText = 'Buzz';
    } else if ((num % 3) == 0) {
        return resultElement.innerText = 'Fizz';
    } else
        return resultElement.innerText = 'Not a valid number ya bozo';


}

    // let result;
    // if (isNaN(num))
    //     return resultElement.innerText = 'Please input a number'
    // switch (numElement.value) {
    //     case 1:
    //         result = 'Fizz';
    //         break;
    //     case num % 5:
    //         result = 'Buzz';
    //         break;
    //     case num % 15:
    //         result = 'FizzBuzz'

    // }
    // // console.log(num)
    // // console.log(result)
    // // resultElement.innerText = result

//creates the onclick function for the HTML button


