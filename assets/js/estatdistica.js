'use strict';

var btn_form=document.getElementById('button_calculo_estadistico');


btn_form.addEventListener('mouseover',()=>{

    let input_numero = document.getElementById('array_numeros').value;
    
    if(input_numero.trim()==='')
    {
        alert('Ni se te ocurra darle click, porque todavía no llenas el input');
    }
   

    
});

btn_form.addEventListener('click',()=>{
    let input_numero = document.getElementById('array_numeros').value;
    if(input_numero.trim()==='')
    {
        alert('Esta vacio el input');
    }
    else
    {
        let array_numbers= input_numero.split(',');

        calcular(... array_numbers);

    }

});


function calcular(...array_numbers)
{
 let largestNumber=Math.max(...array_numbers);
 let smallestNumber=Math.min(...array_numbers);
 let lenghtOfArrayNumber=array_numbers.length;
 
 
var plus =0

let plus_arithmetic_average =array_numbers.map(item=>
    {
        let numberItem= parseInt(item);
        plus+=numberItem;

    });

 



}