function divide(x, y) {
    return x / y;
}

function greet(name, age) {
    return 'hello ' + name + " you are " + add(age, 10) + " years old";
}

function add(x, y) {
    return x + y;
}

let greeting = greet("adam", 5);

console.log(greeting)