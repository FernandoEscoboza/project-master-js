$(document).ready(function(){

    setInterval(function(){
        var reloj = moment().format('hh:mm:ss');
        $('#reloj').html(reloj);
    }, 1000);

    var theme = $('#theme');

    $('#to-green').click(function(){
        theme.attr('href','css/green.css');
    });

    $('#to-red').click(function(){
        theme.attr('href','css/red.css');
    });

    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css');
    });

    // subir
    $('.subir').click(function(e){
        e.preventDefault(); 

        $('html, body').animate({
            scrollTop:0
        },500);

        return false;
    });


});