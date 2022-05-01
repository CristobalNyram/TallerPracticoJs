///funciones geometricas
"use strict";

var btn_area_cu =document.getElementById("areaCuadrado");
var btn_area_tria=document.getElementById("areaTriangulo");
var btn_area_rectangulo=document.getElementById('areaRectangulo');
var btn_area_rombo=document.getElementById('areaRombo');
var btn_area_romboide=document.getElementById('areaRomboide');
btn_area_cu.addEventListener("click", ()=>
{
    Swal.fire({
        type: 'info',
        title: 'Cuadrado',
        text: 'Ingrese la medida de un lado del cuadrado',
        input:'number',
       
      }).then((result)=>{
        if(result.value)
        {
          Swal.fire(
              {
                  title:'La área es:',
                  html:
                  `<strong> <pre><code>`+
                  JSON.stringify(area_cuadrado(result.value))+
                  `</code></pre> </strong>`,
                  confirmButtonText:'ok'
              }
          )
        }
      })
});

btn_area_tria.addEventListener("click",()=>
{
    Swal.mixin(
        {
            input:'number',
            confirmButtonText:'Siguiente',
            showCancelButton:true,
            progressSteps:['1','2']
        }
    ).queue([
        {
            title:'Area del triangulo',
            text: 'Base:',

        },
        {
            title:'Area del triangulo',
            text: 'Altura:',
        },
    ]).then((result)=>
    {
      if(result.value)
      {
        Swal.fire(
            {
                title:'La área es:',
                html:
                `<strong> <pre><code>`+
                JSON.stringify(area_triangulo(result.value[0],result.value[1]))+
                `</code></pre> </strong>`,
                confirmButtonText:'ok'
            }
        )
      }
    });
});

btn_area_rectangulo.addEventListener("click",()=>
{
    Swal.mixin(
        {
            input:'number',
            confirmButtonText:'Siguiente',
            showCancelButton:true,
            progressSteps:['1','2']
        }
    ).queue([
        {
            title:'Area del rectangulo',
            text: 'Base:',

        },
        {
            title:'Area del rectangulo',
            text: 'Altura:',
        },
    ]).then((result)=>
    {
      if(result.value)
      {
        Swal.fire(
            {
                title:'La área es:',
                html:
                `<strong> <pre><code>`+
                JSON.stringify(area_rectangulo(result.value[0],result.value[1]))+
                `</code></pre> </strong>`,
                confirmButtonText:'ok'
            }
        )
      }
    });
});

btn_area_rombo.addEventListener('click',()=>
{
    Swal.mixin(
        {
            input:'number',
            confirmButtonText:'Siguiente',
            showCancelButton:true,
            progressSteps:['1','2']
        }
    ).queue([
        {
            title:'Area del rombo',
            text: 'digonal mayor:',

        },
        {
            title:'Area del rombo',
            text: 'digonal menor:',
        },
    ]).then((result)=>
    {
      if(result.value)
      {
        Swal.fire(
            {
                title:'La área es:',
                html:
                `<strong> <pre><code>`+
                JSON.stringify(area_rombo(result.value[0],result.value[1]))+
                `</code></pre> </strong>`,
                confirmButtonText:'ok'
            }
        )
      }
    });
});

btn_area_romboide.addEventListener("click",()=>
{
    Swal.mixin(
        {
            input:'number',
            confirmButtonText:'Siguiente',
            showCancelButton:true,
            progressSteps:['1','2']
        }
    ).queue([
        {
            title:'Area del romboide',
            text: 'lado mayor:',

        },
        {
            title:'Area del romboide',
            text: 'lado menor:',
        },
    ]).then((result)=>
    {
      if(result.value)
      {
        Swal.fire(
            {
                title:'La área es:',
                html:
                `<strong> <pre><code>`+
                JSON.stringify(area_romboide(result.value[0],result.value[1]))+
                `</code></pre> </strong>`,
                confirmButtonText:'ok'
            }
        )
      }
    });
});



function area_rectangulo(base, altura)
{
    var area = (base*altura);
    return area;
}

function area_cuadrado(lado)
{
    var area= lado*4;
    return area;

}
function area_triangulo( base, altura)
{
    var area = (base*altura)/2;
    return area;

}
function area_rombo(DiganonalMayor, DiganonalMenor)
{
    var area = (DiganonalMayor*DiganonalMenor)/2;
    return area;
}
function area_romboide(base, altura)
{
    var area= area_rectangulo(base,altura);
    return area;
}


///CANVAS///
const canvas =document.getElementById('dibujar_en_canvas');
const ctx =canvas.getContext('2d');

ctx.strokeRect(50, 35, 50, 50); 