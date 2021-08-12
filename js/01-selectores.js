'use strict';
//el document ready carga el jquery para trabajar sin problemas
// el $ y la palabra "jquery" son lo mismo
$(document).ready(function () {
   
    //Selector de id
     $("#rojo").css("background","red")
               .css("color","white");
     $("#amarillo").css("background","yellow")
                   .css("color","green");
     $("#verde").css("background","green")
                .css("color","white");

    // Selector de Clases
    var mi_clase = $('.zebra').css("padding","5px");

    $('.sin_borde').click(function () {
        console.log("click dado!!!!");
        $(this).addClass('zebra');
    });

    // Selectores de Etiqueta
    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function () {
        var thiss = $(this);
        if (!thiss.hasClass('grande')) {
            thiss.addClass('grande');
        }else{
            thiss.removeClass('grande');
        }

    });

    //Selectores de Atributos
    $('[title="google"]').css("background","#ccc");
    $('[title="facebook"]').css("background","yellow");
    //otros
    //$('p, a').addClass('margen-superior');

     var busqueda = $("#elemento2").parent().parent().find('.resaltado');
    console.log(busqueda); 



});