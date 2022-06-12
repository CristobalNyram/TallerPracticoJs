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
        let array_numbers = input_numero.split(',').sort();
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
let resulOfFashion=calculateFashion(...array_numbers);
let everageOFArray=everage(sumOfNumbers,array_numbers.length);

let resultaMessage=`${everageOFArray}

${resultOfMedian}

${resulOfFashion}

`;
Swal.fire(resultaMessage);

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
    let result=resultSum/numberMembers;
    return `El promedio de los numero es ${result}`;
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
         return `la medía son estos dos números :${medianElement} ${medianElement2}`;

    }
    else
    {
        let medianElement= numberOFarray[indice];
        return `La media es: ${medianElement}`;
    }

}



function calculateFashion(...array_numbers)
{
    let list =array_numbers;
    const listCount={};
    list.map(
        (elemt)=>{
            
            if (listCount[elemt]) {
                listCount[elemt]+=1;
    
    
            }
            else
            {
                listCount[elemt]=1;
    
            }
            
    
        }
    );
    
    const listArray =Object.entries(listCount).sort(
    
        (valorAcumulado,nuevoElemento)=>{
            return valorAcumulado[1]-nuevoElemento[1];
    
        }
    );
    let fashion =listArray[listArray.length-1];


    return `<b>El número que se  repite más veces</b> es ${fashion[0]} y se repité ${fashion[1]} veces`;





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


