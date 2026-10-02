
 
function handleKeyboardButtonPress(event){
    const playerPressed =event.key;
    console.log('player pressed',playerPressed);

    // get the expected to press---
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet =currentAlphabetElement.innerText;
    const expectedLowercase =currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedLowercase);
    // checked the alphabet matched or not
    if(playerPressed === expectedLowercase){
        console.log("you get a point");
        // update score------
        //1. get the current score-------
        const currentScoreElement = document.getElementById("current-score");
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText);

        //2.  increase the score by 1---
        const newScore =currentScore + 1;
        // 3. show the update score
        currentScoreElement.innerText = newScore;
        // start a new round --------
        continueGame();
        offBackgroundColorById(expectedLowercase);
    }
    else{
        console.log('you lost a life');
    }
}

// capture keyboard callback function-

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
// generate random alphabet
const alphabet =getARandomAlphabet();
console.log('your random alphabet',alphabet);

// set randomly generated alphabet to the screen (show it)---------
const currentAlphabet =document.getElementById('current-alphabet');
currentAlphabet.innerText = alphabet;

// set background color using random generated alphbet --------
setBackgroundColorById(alphabet);
}

function play(){
    hideElimentById('home-screen');
    visibleElimentById('playground');
    continueGame();
}