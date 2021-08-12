$(document).ready(function () {
   
    //Mover un elemento por la pagina --draggable
    $('.elemento').draggable();

    //Redimendionar elementos -->> resizable
    $('.elemento').resizable();

    //Seleccionar elementos --->>selectable
    //$(".lista-seleccionable").selectable();
    //Ordenar elementos --->> sortable- no se puede usar si esta activo selectable
    $(".lista-seleccionable").sortable({
        update: function (event, ui) {
            console.log("ha cambiado la lista");
        }
    });
    //Drop Drag---->> permite arrastra un elemento dentro de otro
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function () {
            alert("HAs soltado algo dentro");
        }
    });
    //Efectos
    $("#mostrar").click(function () {
        //$(".caja-efectos").fadeToggle();
        //$(".caja-efectos").effect("explode");
        //$(".caja-efectos").toggle("blind");
        //$(".caja-efectos").toggle("slide");
        //$(".caja-efectos").toggle("drop");
        //$(".caja-efectos").toggle("fold");
        //$(".caja-efectos").toggle("puff");
        $(".caja-efectos").toggle("shake", );
    });

    //Tooltip
    $(document).tooltip();

    //Dialog --- xcrea un recuadro en el id con un texto 
    $("#lanzar-popup").click(function name(params) {
        $("#popup").dialog();
    })

    //Datepicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
    


});