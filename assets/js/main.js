///funciones geometricas
"use strict";

var btn_area_cu =document.getElementById("areaCuadrado");
var btn_area_tria=document.getElementById("areaTriangulo");
var btn_area_rectangulo=document.getElementById('areaRectangulo');
var btn_area_rombo=document.getElementById('areaRombo');
var btn_area_romboide=document.getElementById('areaRomboide');

//btns de permitros
var btn_perimetro_cu=document.getElementById('perimetroCuadrado');
var btn_perimetro_tria=document.getElementById('perimetroTriangulo');
var btn_perimetro_rectangulo=document.getElementById('perimetroRectangulo');
var btn_perimetro_rombo=document.getElementById('perimetroRobo');
var btn_perimetro_romboide=document.getElementById('perimetroRomboide');
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

btn_perimetro_tria.addEventListener("click",()=>
{
    Swal.mixin(
        {
            input:'number',
            confirmButtonText:'Siguiente',
            showCancelButton:true,
            progressSteps:['1','2','3']
        }
    ).queue([
        {
            title:'Perimetro del triangulo',
            text: 'Base:',

        },
        {
            title:'Perimetro del triangulo',
            text: 'lado 1:',
        },
        {
            title:'Perimetro del triangulo',
            text: 'lado 2:',
        },
    ]).then((result)=>
    {
      if(result.value)
      {
        Swal.fire(
            {
                title:'El perimetro es:',
                html:
                `<strong> <pre><code>`+
                JSON.stringify(perimetro_triangulo(result.value[0],result.value[1],result.value[2]))+
                `</code></pre> </strong>`,
                confirmButtonText:'ok'
            }
        )
      }
    });
});

btn_perimetro_cu.addEventListener('click',()=>
{   
     Swal.mixin(
    {
        input:'number',
        confirmButtonText:'Siguiente',
        showCancelButton:true,
        progressSteps:['1']
    }
).queue([
    {
        title:'Perimetro del cuadrado',
        text: 'lado :',

    }
]).then((result)=>
{
  if(result.value)
  {
    Swal.fire(
        {
            title:'La perimetro es:',
            html:
            `<strong> <pre><code>`+
            JSON.stringify(perimetro_cuadrado(result.value[0]))+
            `</code></pre> </strong>`,
            confirmButtonText:'ok'
        }
    )
  }
});

});

btn_perimetro_rectangulo.addEventListener('click',()=>
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
            title:'Perimetro del rectangulo',
            text: 'Base:',

        },
        {
            title:'Perimetro del rectangulo',
            text: 'Altura:',
        }
       ,
    ]).then((result)=>
    {
      if(result.value)
      {
        Swal.fire(
            {
                title:'El perimetro es:',
                html:
                `<strong> <pre><code>`+
                JSON.stringify(perimetro_rectangulo(result.value[0],result.value[1]))+
                `</code></pre> </strong>`,
                confirmButtonText:'ok'
            }
        )
      }
    });

});

btn_perimetro_rombo.addEventListener('click',()=>
{
    Swal.mixin(
        {
            input:'number',
            confirmButtonText:'Siguiente',
            showCancelButton:true,
            progressSteps:['1','2','3','4']
        }
    ).queue([
        {
            title:'Perimetro del rombo',
            text: 'lado 1:',

        },
        {
            title:'Perimetro del rombo',
            text: 'lado 2:',
        }
       ,
         {
            title:'Perimetro del rombo',
            text: 'lado 3:',
        }
       ,
       {
        title:'Perimetro del rombo',
        text: 'lado 4:',
       }
   ,
    ]).then((result)=>
    {
      if(result.value)
      {
        Swal.fire(
            {
                title:'El perimetro es:',
                html:
                `<strong> <pre><code>`+
                JSON.stringify(perimetro_rombo(result.value[0],result.value[1],result.value[2],result.value[3]))+
                `</code></pre> </strong>`,
                confirmButtonText:'ok'
            }
        )
      }
    });


});

btn_perimetro_romboide.addEventListener('click',()=>
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
            title:'Perimetro del romboide',
            text: 'Lado de base:',

        },
        {
            title:'Perimetro del romboide',
            text: 'Lado de altura:',
        }
       ,
    ]).then((result)=>
    {
      if(result.value)
      {
        Swal.fire(
            {
                title:'El perimetro es:',
                html:
                `<strong> <pre><code>`+
                JSON.stringify(perimetro_rectangulo(result.value[0],result.value[1]))+
                `</code></pre> </strong>`,
                confirmButtonText:'ok'
            }
        )
      }
    });

});


///FUNCIONES 

//perimetro
function perimetro_cuadrado(lado)
{
    var perimetro=lado*4;
    return perimetro;
}
function perimetro_triangulo(base,lado1,lado2)
{
    var perimetro=parseInt(base)+parseInt(lado1)+parseInt(lado2);
    return perimetro;
}

function perimetro_rectangulo(lado1,lado2)
{
    var perimetro=(parseInt(lado1)*2)+(parseInt(lado2)*2);
    return perimetro;
}

function perimetro_rombo(lado1,lado2,lado3,lado4)
{
    var perimetro=parseInt(lado1)+parseInt(lado2)+parseInt(lado3)+(parseInt(lado4));
    return perimetro;

}

//area

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