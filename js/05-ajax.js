$(document).ready(function(){
    
    /*
    metodo Load nos permite hacer una petición a ajax
    y mostrar el resultado a traves de un div.
    --en este caso el div es #datos
    */
   //$("#datos").load("https://reqres.in/");

   /*
   Get y Post --->> 
   */

   $.get("https://reqres.in/api/users",{page: 2}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+ " " +element.last_name+"</p>");
        }); 
    });
    

    $("#formulario").submit(function(e) {
        e.preventDefault();


        var usuario = {
            name : $('input[name="name"]').val(),
            web : $('input[name="web"]').val()
        };
        /* console.log(usuario);
    
        $.post($(this).attr("action"), usuario, function (response) {
            console.log(response);
        }).done(function () {
            alert("usuario añadido correctamente");
        }); */

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            //antes de que se envie realiza una accion(beforeSend)
            beforeSend: function () {
              console.log("Enviando Usuario...");  
            },
            success: function (response) {
                console.log(response);
            },
            error: function (){
                console.log("Ha ocurrido un error");
            },
            timeout: 2000
             
            /* dataType: 'json',
            contentType: 'aplication/json' */
        });

        return false;

    });

 });










