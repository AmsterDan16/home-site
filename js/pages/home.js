 window.addEventListener('scroll', function(){
    var currentPos = $(this).scrollTop();
    var picturePos = 200;
    var paragraphPos = 420;
    $('.picContainer').css({'opacity' : (1 - currentPos/picturePos)});
    $('.pContainer').css({'opacity' : (1 - currentPos/paragraphPos)});
});

var expandingElements = document.getElementsByClassName('moreButton');
var onProjectExpand = function(){
        var sibs = this.parentNode.childNodes;
    var parent = this.parentNode;
    //*functional - removed for now
    //sibs[3].classList.add('moveLogo');
    $(this).siblings('.projDetails').toggleClass('expandDetails');
    //$(this).siblings('.projDetails').fadeToggle();
    var kids = this.childNodes;
    if(kids[1].innerHTML == "MORE"){//if($(this).siblings('.moreButton').childNodes('.expandBtnText').innerHTML == "MORE"){
        kids[1].innerHTML = "LESS";//$(this).siblings('.expandBtnText').innerHTML = "LESS";
        //flip arrow
        //kids[6].toggleClass('flip');
    } else {
        kids[1].innerHTML = "MORE";//$(this).siblings('.expandBtnText').innerHTML = "MORE";
        //kids[6].toggleClass('flip');
    }
}
for(var i = 0; i < expandingElements.length; i++){
    expandingElements[i].addEventListener('click', onProjectExpand, false);
}