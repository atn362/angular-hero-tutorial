function greet(name, age, job) {
    return('Hello, my name is ' + name + ', i am ' + age + ' years old.'
        + ' I work professionally as a ' + job + '. ' + "I will be " + add(age, 1) + ' next year.');

};

let greeting = greet('Alex', 35, 'consultant')

console.log(greeting)

function add(x, y) {
   return x + y;
}



