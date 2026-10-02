
 
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
        const currentScore =getElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score' ,updatedScore)

       
       
       
        // update score------
        //1. get the current score-------
        // const currentScoreElement = document.getElementById("current-score");
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // //2.  increase the score by 1---
        // const newScore =currentScore + 1;
        // // 3. show the update score
        // currentScoreElement.innerText = newScore;
        // start a new round --------
        continueGame();
        offBackgroundColorById(expectedLowercase);
    }
    else{
        console.log('you lost a life');

        const currentValue = getElementValueById('life-score')
        const updatedLife = currentValue - 1;
        setTextElementValueById('life-score',updatedLife);


        // 1. get the current life number--
        // const currentLifeScore =document.getElementById("life-score");
        // const currentLifeText =currentLifeScore.innerText
        // //2. reduce the life count-----
        // const updateScore =parseInt(currentLifeText);
        // const newUpdateScore = updateScore - 1;
        // // display the update life score
        // currentLifeScore.innerText =newUpdateScore;
        if(updatedLife === 0){
            gameOver();
        }
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
    // hide everithing show only the playground------
    hideElimentById('home-screen');
    hideElimentById('final-score');
    visibleElimentById('playground');
    // reset score and life value ---------
    setTextElementValueById('life-score',5);
    getElementValueById('current-score',0);
    continueGame();
}

// gameover function call--------

function gameOver(){
    hideElimentById('playground');
    visibleElimentById('final-score');
}