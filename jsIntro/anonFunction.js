// const func = () => {
//     console.log('hello world')
// }
//
// // function foo(func) {
// //     func()
// // }
//
// console.log(func)
// func()

function foo(func) {
    return func()
}

const result = foo( () => {
    return('hello world')
});
console.log(result)