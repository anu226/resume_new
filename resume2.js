var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
for(var i=0; i< navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetsectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetsectionID);
        console.log(targetSection);
        
        var interval= setInterval(function(){
            var targetSectionCoordinates= targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);

        },2);
    });
}