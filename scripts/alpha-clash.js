// function play(){
//     // step1:=press thebutton and hide home section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden')
//     // step2:= show the alpha playground
//     const alphaPlayGround =document.getElementById('playground')
//     alphaPlayGround.classList.remove('hidden');
// }

function continueGame(){
// generate random alphabet
const alphabet =getARandomAlphabet();
console.log('your random alphabet',alphabet);

// set randomly generated alphabet to the screen (show it)---------
const currentAlphabet =document.getElementById('current-alphabet');
currentAlphabet.innerText =alphabet;
}

function play(){
    hideElimentById('home-screen');
    visibleElimentById('playground');
    continueGame();
}