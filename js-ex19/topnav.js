function myFunc(){
    var x = document.getElementById("myTopnav");
    if (x.className === 'topnav'){
        x.className += ' responsive';
    }else {
        x.className = 'topnav';
    }
}

function showDetail(evt){
    evt.currentTarget.lastElementChild.classList.toggle('show');
    // alert(evt.currentTarget.lastElementChild.textContent)
}