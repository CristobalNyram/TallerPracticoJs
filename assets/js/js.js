'use strict';

var btn_form_productos= document.getElementById('button_descuento_producto');

btn_form_productos.addEventListener('click',()=>
{
   descuento_de_producto(porcentahe_descuento,precio);
   
});

function descuento_de_producto(porcentahe_descuento, precio)
{
    var total_de_descuento =(precio*porcentahe_descuento)/100;
    return total_de_descuento;

}