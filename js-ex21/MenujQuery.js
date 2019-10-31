$(function(){
    // 菜单绑定事件  
    initMenuListener();
    initSubMenuHover();
    initSubMenuLiHover() ;
});

/** 
 * 头部菜单绑定滑过事件 
 */ 

function initMenuListener(){
     $(".menuli").hover(function(){
         var hideDiv = $(this).attr('id') + '_div' ;
         var left = $(this).offset().left;
         var top = $(this).offset().top;
         var height = $(this).outerHeight();

         $('#' + hideDiv).show();
         console.log('#'+hideDiv +":" + top+":" + height);
         $('#' + hideDiv).css('left', left);
         $('#' + hideDiv).css('top', top + height);
         
     }, function(){
         $(".display").hide();
     });
}

function initSubMenuHover() {  
    $(".display").hover(function() {  
        $(this).show();  
    }, function() {  
        $(this).hide();  
    });  
}  
/** 
 *  下拉菜单改变颜色 
 */  
// function initSubMenuLiHover() {  
//     $(".redli").hover(function() {  
//         $(this).addClass("redcolor"); 
//         // $(this).classList.add("redcolor"); 
//     }, function() {  
//         $(this).removeClass("redcolor");  
//     });  
// } 


// 原生JS语法
function initSubMenuLiHover(){
    var redli = document.querySelectorAll('.redli');
    var i;
    for (i=0; i<redli.length;i++){
        redli[i].addEventListener('mouseover',function(){
            this.classList.add('redcolor');
        });
        redli[i].addEventListener('mouseout',function(){
            this.classList.remove('redcolor');
        });
    }
}