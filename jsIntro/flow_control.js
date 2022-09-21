let foo = 100;
let bar = 50;
//
// if (foo > 50) {
//     console.log('Foo is larger than 50')
// } else if (foo > 40){
//         console.log('foo is smaller than 50')
//     } else {
//     console.log('foo is very small')
// }

switch (foo) {
    case  50:
        console.log("foo is 50");
        break;
    case  40:
        console.log("foo is 40");
        break;
    case 30:
        console.log("foo is 30");
        break;
    case 20:
        console.log("foo is 20");
        break;
    default:
        console.log('Foo is another value');
        break;
}