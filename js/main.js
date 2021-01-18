"use strict";
$(window).on('load', function () {
    //a tag not refresh
    $(".preDef").click(function(e){
        e.preventDefault();
    });

    //menu open and close
    $(".sub-menu").click(function(){
        $(this).children(".sub").toggleClass("d-none");
        $(this).children(".preDef").toggleClass("rotateIcon");
    });

    $(".menu-icon").click(function(){
        $(".left-menu-area").toggleClass("d-none");
        $(".main-content").toggleClass("main-content-postion");
    });
});