const outputElement = document.getElementById('output')
async function getData() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (response.ok === false) {
        console.error('unable to gather data');
        return
    }
    const data = await response.json();
    console.log (data)
    return data;
}

// function getJoke(data) {
//
//     return data.children.value;
//
//
// }

getData();
