// hidden function----------------

function hideElimentById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// visible function ---------------------
function visibleElimentById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// random alphabet maker function ---------------

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    
    // get a random index between 0-25-----------
    const randomNumber =Math.random()*25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    //  console.log(index,alphabet);
     return alphabet;

}

// function background color add-----------------

function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}

// function backgroundcolor off --------------

function offBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// function add a score number------------

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    elementValueText =element.innerText;
    const value =parseInt(elementValueText);
    return value;

}

// function text value  added -------

function setTextElementValueById(elementId ,value){
    const element = document.getElementById(elementId);
    element.innerText =value;
}