function myFunc(){
    var x = document.getElementById("myTopnav");
    if (x.className === 'topnav'){
        x.className += ' responsive';
    }else {
        x.className = 'topnav';
    }
}

<<<<<<< HEAD
function showDetail(evt){
    evt.currentTarget.lastElementChild.classList.toggle('show');
    // alert(evt.currentTarget.lastElementChild.textContent)
=======
function showDetal(evt){
    evt.currentTarget.children[1].classList.toggle('show')

>>>>>>> 37c3f08c8b9551cbfa3f1bdfb25f7d91aca351bd
}