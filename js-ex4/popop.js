// 获取弹窗
var modal = document.getElementById('myModal');

// 获取‘打开弹窗’按钮对象
var btn = document.getElementById('myBtn');

// 获取<span>元素，用于关闭弹窗
var span = document.querySelector('span');

// 点击按钮打开弹窗
btn.onclick = function(){
    modal.style.display='block';
}

// 点击<span>（X）叉叉，关闭弹窗
span.onclick=function(){
    modal.style.display='none';
}

window.onclick=function(){
    if(this.event.target == this.modal){
        this.modal.style.display='none';
    }
}