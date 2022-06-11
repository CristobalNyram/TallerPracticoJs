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
 let  sumOfNumbers= Sum(array_numbers);
 let largestNumber=Math.max(...array_numbers);
 let smallestNumber=Math.min(...array_numbers);
 let lenghtOfArrayNumber=array_numbers.length;
 let mitadLista=array_numbers.length/2;
 let arrayIsPar=isPar(mitadLista);
 let resultOfMedian=operationsForMedian(mitadLista,arrayIsPar,array_numbers);

let everageOFArray=everage(sumOfNumbers,array_numbers.length);

console.log(resultOfMedian);
}

//  media aritmetica 
function Sum(ArrayList)
{
    let result=0;
    for (let index = 0; index < ArrayList.length; index++) {
         
        let numberToSum=parseInt(ArrayList[index]);
        result = numberToSum +result;
        
    }

    return result;
}
function everage(resultSum,numberMembers)
{
    return resultSum/numberMembers;
}



const isPar=(mitadLista)=>{
    if(mitadLista %2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}



function operationsForMedian( indice,typeOfArray,numberOFarray){
    indice=parseInt(indice);

    if(typeOfArray){
        
         let medianElement= numberOFarray[indice-1];
         let medianElement2= numberOFarray[indice];
         return {medianElement,medianElement2}



    }
    else
    {
        let medianElement= numberOFarray[indice];

        return medianElement;
    }

}



//podemos usar una alternatica a los ciclos for

/*
array.filer
array.map

array.reduce--->nos va a permitar sumar elemento por elemento
array.reduce(
    (valorAcumulado,nuevoElemento)=>{

    }
);

*/


