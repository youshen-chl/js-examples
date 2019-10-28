var id;
function startMove() {
    var elem = document.getElementById("myAnimation");  
    var container = document.getElementById('myContainer');
    var elem_x = parseInt(elem.offsetWidth);
    var elem_y = parseInt(elem.offsetHeight);
    var max_x = parseInt(container.offsetWidth);
    var max_y = parseInt(container.offsetHeight);
    // prompt("elem_x", elem.offsetWidth)
    max_x = max_x - elem_x;
    max_y = max_y - elem_y;
    // var count = 10000;
    var pos_x = 0, pos_y = 0;
    id = setInterval(frame, 10);
    var i_x=3, i_y=1;
    function frame() {
        pos_y = pos_y + i_y;
        pos_x = pos_x + i_x;

        if((pos_x >= max_x)||(pos_x <= 0)){
            i_x=-i_x;
        }
        
        if((pos_y >= max_y)||(pos_y <= 0)){
            i_y=-i_y;
        }

        elem.style.top = pos_y + 'px'; 
        elem.style.left = pos_x + 'px'; 
        // }
    }
    // prompt("i_x", i_x);
    // prompt("i_y", i_y);
}

function stopMove(){
    clearInterval(id);
}