'use strict';

let buttom = document.getElementById("icon");
let links = document.getElementById("links");
let count = 0;

buttom.addEventListener("click", function(e){
    e.preventDefault();
    if(count == 0){
        links.className = ("links two");
        count = 1;
    } else {
        links.classList.remove("two");
        links.className = ("links one");
        count = 0;
    }
})