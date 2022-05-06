'use strict';

var btn_form_productos= document.getElementById('button_descuento_producto');
var texto_titulo=document.getElementById('tituloproducto');
var texto_precio=document.getElementById('texto_precio');
var texto_descuento=document.getElementById('texto_descuento');
var texto_total_pagar=document.getElementById('texto_total_apagar');
var texto_porcentaje_desc=document.getElementById('texto_porcentaje_descuento');
var card_desc=document.getElementById('card_desc');

btn_form_productos.addEventListener('click',()=>
{
    var input_nombre= document.getElementById('nombre_producto').value;
    var imput_descuento_porcentaje=parseInt(document.getElementById('descuento_producto').value);
    var input_precio=parseInt(document.getElementById('precio_producto').value);
    

    if((isNaN(input_precio) || isNaN(imput_descuento_porcentaje) || input_nombre===""  ))
    {
        Swal.fire({
            type: 'error',
            title: 'Faltan datos',
            text: 'Llena correctamente el formulario,por favor.', 
          });
    }
    else
    {   

       var descuento= calcular_descuento_de_producto(imput_descuento_porcentaje,input_precio);
       var total_pagar=input_precio-descuento;

       llenar_card(input_nombre,input_precio,descuento,total_pagar,imput_descuento_porcentaje);
       
    }
   
});

function llenar_card(input_nombre,input_precio,input_descuento,total_pagar,input_procetaje_des)
{
    texto_titulo.innerText =input_nombre;
    texto_precio.innerText ="$"+input_precio;
    texto_descuento.innerText='$'+input_descuento;
    texto_total_pagar.innerText="$"+total_pagar;
    texto_porcentaje_desc.innerText=input_procetaje_des+"%";
    mostratCard();
}



function mostratCard()
{
    card_desc.style.display="block";
    setTimeout(ocultarCard,5000);
}
function ocultarCard()
{
    card_desc.style.display="none";
}

function calcular_descuento_de_producto(porcentahe_descuento, precio)
{
    var total_de_descuento =(precio*porcentahe_descuento)/100;
    return total_de_descuento;

}