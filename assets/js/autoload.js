'use strict';

var load =document.getElementById('load');
var body =document.getElementById('body_content');
var load_text =document.getElementById('text_loader');


window.addEventListener('load',()=>{
    setTimeout(()=>
    {
        load.style.display='none';
        load_text.style.display='none';
        body.style.display='block';
        
        
    },5000);
});
