const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');
const outputElementTwo = document.getElementById('output2');
const outputElementThree = document.getElementById('output3');
const outputElementFour = document.getElementById('output4');
const outputElementFive = document.getElementById('output5');
const outputElementSix = document.getElementById('output6');
const outputElementSeven = document.getElementById('output7');




async function getBobsData(bobsId) {
    const response = await fetch(
        'https://bobsburgers-api.herokuapp.com/characters/' + bobsId)
    if (bobsId >= 507) alert('You have gone too far.  Keep searches between 1 and 506')
    if (response.ok === false) {
        console.log('Issue occurred')
        return null

    }

    const data = await response.json();
    console.log(data)
    return data;
}


async function submit() {
    try {
        const bobsId = inputElement.value;
        const bobsData = await getBobsData(bobsId);
        // if (bobsData === null) {
        //     outputElement.innerText = 'Bobs Burgers Character not found'
        //     return;
        outputElement.innerHTML = `<h3>Name: ${bobsData.name}</h3>`
        outputElementTwo.innerHTML = `<img src=${bobsData.image}>`
        outputElementThree.innerHTML = `<h3>Hair Color: ${bobsData.hairColor} </h3>`
        outputElementFour.innerHTML = `<h3>Gender: ${bobsData.gender} </h3>`
        outputElementFive.innerHTML = `<h3>First Episode: ${bobsData.firstEpisode} </h3>`
        outputElementSix.innerHTML = `<h3>Occupation: ${bobsData.occupation} </h3>`
        outputElementSeven.innerHTML = `<h3>Voiced By: ${bobsData.voicedBy} </h3>`




    }
    catch (error){
        console.error(error);
    }

}