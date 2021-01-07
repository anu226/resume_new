// skills bar section animation
// check that skills sections container is visible or not
//ensure that initial width of colored skill div is zero -> initialised to 0 width value
//start animation on every skill -> increase skill width from 0 to skill level at regular intervals
//store skill level -> HTML with the help data attribute
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll );
var animationDone = false;//this is false as the skill bar will be visible it will turn to true as shown below i.e it will apply animation only once

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}
initialiseBars()
function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentwidth= 0;
        let interval = setInterval(function(){
            if(currentwidth> targetWidth){
                clearInterval(interval);
                return;

            }
            currentwidth++;
            bar.style.width = currentwidth + '%';
        },3);
    }

}


function checkScroll(){
    // you have to check whether scroll is visible or not
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone=true;
        fillBars();
        
    }else if(coordinates.top > window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}