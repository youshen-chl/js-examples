function myFunc(){
    var x = document.getElementById("myTopnav");
    if (x.className === 'topnav'){
        x.className += ' responsive';
    }else {
        x.className = 'topnav';
    }
}

function showDetal(evt){
    evt.currentTarget.children[1].classList.toggle('show')

}