$(Document).ready(function () {
    /*
    Aca mostramos y ocultamos botones con la funtion hide y show 
    -- TAmbien cambiamos la etiqueta  show y hade por fadeIn y fadeOut
    --El fadeTo le debemos dar 2 paramateros con 1 muestra con 0 no
    */
   //$("#caja").hide(); // esconde la caja con el id caja
    var caja = $("#caja");

   $("#mostrar").hide();

   $("#mostrar").click(function () {
       $(this).hide();
    $("#ocultar").show();   
    //$("#caja").fadeIn('slow');
    caja.fadeTo('slow', 1);
       
   });
   $("#ocultar").click(function () {
    $(this).hide();
    $("#mostrar").show();
    //$("#caja").fadeOut('slow');
    //caja.fadeTo('slow', 0);
    caja.slideUp('slow',function () {
        console.log('Cartel Ocultado');
    });
    
       
   });
   //en esta funcion realiza  todas las funciones arriba comentadas en uno solo
   //fadetoggle, slidetoggle(up--oculta )
   $("#todoenuno").click(function () {
    caja.toggle('fast');
   });
   //corre el elemento 500 px a la izquierda
   $("#animar").click(function () {
    caja.animate({
                   marginLeft: '500px',
                   fontSize: '40px' ,
                   height: '110px' }, 'slow')
          .animate({
                    borderRadius: '900px',
                    marginTop: '80px'
         },'slow')           
        .animate({
                   borderRadius: '0px',
                   marginLeft: '0px'
        },'slow') 
        .animate({
                   borderRadius: '100px',
                  marginTop: '0px'
        },'slow') 
        .animate({
            marginLeft: '500px',
            fontSize: '40px' ,
            height: '110px' },
            'slow')           
         ;
   });





});