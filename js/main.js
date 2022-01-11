
$(document).ready(function(){
    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        responsive: true,
        slideWidth: 1200,
        captions: true,
    });

    // Posts
    var posts = [
        {
            tittle:'Prueba de titulo 1',
            date: new Date(),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            tittle:'Prueba de titulo 2',
            date: new Date(),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            tittle:'Prueba de titulo 3',
            date: new Date(),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            tittle:'Prueba de titulo 4',
            date: new Date(),
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ];

    posts.forEach((item)=>{
        var post = `
            <article class="post">
                <h2>${item.tittle}</h2>
                <span class="date">Fecha de publicacion ${item.date}</span>
                <p>${item.content}</p> 
                <a href="" class="button-more">Leer mas</a>
            </article>
        `;

        $('#articulos').append(post);
    });
    console.log('load');
    
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