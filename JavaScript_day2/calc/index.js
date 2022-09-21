console.log('hello world');

const element = document.getElementById("test");
element.innerText = "hello world";

const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const operationElement = document.getElementById("op");
const outputElement = document.getElementById("output");

function onClick() {
    console.log('button was clicked');
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);

    // guard
    if (isNaN(num1) || isNaN(num2)) {
        return;
    }

    let result;
    switch (operationElement.value) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }

    outputElement.innerText = "result: " + result;
    console.log("calculated value: ", result);
}

