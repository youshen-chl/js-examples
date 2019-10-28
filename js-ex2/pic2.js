var slideIndex = 1;
var autoplay;
showSlides(1);

//第二种方法 循环播放
autoplay = setInterval(function(){++slideIndex;showSlides(slideIndex)}, 3000);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(n);
}

function showSlides(n){
    // promise only one 'showSlides' function standby
    // clearTimeout(autoplay);
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length){n = 1}
    if (n < 1){n = slides.length}

    for (i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '');
    }

    slides[n - 1].style.display = 'block';
    dots[n - 1].className += ' active';
    slideIndex = n;

    //第一种方法 循环播放
    // n++;
    // autoplay=setTimeout(showSlides, 4000 ,++n);
}

