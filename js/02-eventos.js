$(document).ready(function () {
    
    //mouse hover y mouse out
    var caja =  $("#caja");

   /*  caja.mouseover(function () {
        $(this).css("background","red");
    });
    caja.mouseout(function () {
        $(this).css("background","green");
    }); */

    //hover 

    function cambiaRojo() {
        $(this).css("background","red");
    }

    function cambiaVerde() {
        $(this).css("background","green");
    }

    caja.hover(cambiaRojo, cambiaVerde);

    //click, doble click
    caja.click(function () {
        $(this).css("background","blue")
               .css("color","white");
    });
    caja.dblclick(function () {
        $(this).css("background","pink")
               .css("color","yellow");
    });

    //focus y Blur
    var nombre = $("#nombre");
    var datos =  $("#datos");

    nombre.focus(function () {
        $(this).css("border", "2px solid cyan");
    });
    //el metodo val permite sacar y mostrar datos
    nombre.blur(function () {
        $(this).css("border", "1px solid #ccc");
        
        datos.text($(this).val()).show();
    });

    //mousedown y mouseup
    datos.mousedown(function() {
        $(this).css("border-color","gray");
    });
    datos.mouseup(function() {
        $(this).css("border-color","black");
    });

    //mousemove
    $(document).mousemove(function () {
        $("body").css("cursor","none");
        $("#sigueme").css("left",event.clientX)
                     .css("top",event.clientY);
    });

    
});

