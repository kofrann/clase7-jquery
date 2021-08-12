$(document).ready(function () {
   // console.log($('a').length);//cuenta las etiquetas <A> que coontienen el href

    reloadkLinks();

    $('#add_button').click(function() {
        $("#menu").prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');

        $("#add_link").val('');//Limpia el input despues de apretar el button enviar
        reloadkLinks();
       });
   /* con el metodo html puedo inserta r varios elemtos en la lista
   **con el metodp append agregamos en la misma lista de  referencias al final de la lista 
   ** con el metodo prepend es lo misco que append pero es en el inicio de la lista 
   *** con el before  te añade fuera de la lista*/




});

function reloadkLinks() {
    $('a').each(function name(index) {
        //console.log($(this).attr("href"));//selecciona  y muestra las etiquetas href
 
        /* $('#add_button').click(function() {
            console.log($("#add_link").val());//Aca con esta funcion tomamos  el texto escrito y lo mostramos a traves 
            //de la consola
        }); */
 
        var that =  $(this);
        var enlace = that.attr("href");

        that.attr('target','_blank');//Te permite Abrir el enlace en una pestaña distinta

        that.text(enlace);// muestra en la variable that los enlaces y los imprime a traves de text.
    });
}