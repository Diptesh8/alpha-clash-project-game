function hideElimentById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function visibleElimentById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}