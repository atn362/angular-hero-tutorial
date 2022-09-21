const str = 'hello';
const num = 3;
const bool = true;


// const apple = {
//     name: 'honeyCrisp',
//     type: 'fruit',
//     color: 'red',
//     shape: 'round',
//     delicious: true,
//     seasonality: 'fall',
//
// };
//
// const carrot = {
//     name: 'heirloom',
//     type: 'vegetable',
//     color: 'orange',
//     shape: 'triangle',
//     delicious: true,
//     seasonality: 'winter',
//
// };
//
// const potato = {
//     name: 'russet',
//     type: 'vegetable',
//     color: 'brown',
//     shape: 'oval',
//     delicious: true,
//     seasonality: 'winter',
//
// };
//
// console.log(apple.name + ' are delicious, and are often the color' + " " + apple.color)
// const food = [apple, carrot, potato];
//
//
// console.log(food[2])

const array = ['red', 'green', 'blue', 'yellow'];

for (const color of array) {

    if (color == 'red') {
        continue;
    }

    if (color == "blue") {
        console.log('found blue');
        break;
    }
    console.log(color)
}
