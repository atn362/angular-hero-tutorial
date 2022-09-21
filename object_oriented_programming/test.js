// const apple = {
//     size: 100,
//     worm: true,
//     color: 'red'
// };
//
// const apple2 = {
//     size: 100,
//     worm: true,
//     color: 'green'
// }

class Apple {
    size = 100
    worm = false
    color

    constructor(color) {
        this.color = color;
    }

    takeBite() {
        this.size -= 20;
        if(this.worm) {
            console.log('barf')
        }
    }
}

const apple = new Apple( 'red');
const apple1 = new Apple( 'green');
const apple2 = new Apple( 'yello');
const apple3 = new Apple( 'gold');

apple.takeBite()
console.log(apple, apple1, apple2, apple3)