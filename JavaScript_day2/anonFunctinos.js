// const func = () => {
//     console.log('hello world')
// }
//
// console.log(func)
// func()

// function foo(func) {
//     func()
// }
//
// foo(func)

function foo(func) {
    return func()
}

const result = foo(() => {
    return "hello world"
});

console.log(result)