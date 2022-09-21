let foo = 100;

if (foo > 50) {
    console.log('foo is larger than 50');
} else if (foo > 40) {
    console.log('foo is NOT larger than 40');
} else if (foo > 30) {
    console.log('foo is NOT larger than 30');
} else if (foo > 20) {
    console.log('foo is NOT larger than 20');
} else {
    console.log('foo is really small');
}

switch (foo) {
    case 50:
    case 51:
        console.log('foo is  50');
        break;
    case 40:
        console.log('foo is 40');
        break;
    case 30:
        console.log('foo is 30');
        break;
    case 20:
        console.log('foo is 20');
        break;
    default:
        console.log('foo is some other value');
        break;
}
