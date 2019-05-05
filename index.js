$(document).ready(function () {

    $('.section1__feuille').hide();

    $('.section2__logo').hide();

    $('.section3').hide();

    setTimeout(function () {
        $('.section1__feuille').fadeIn();
    }, 1000);

    setTimeout(function () {
        $('.section1').fadeOut();
    }, 3000);

    setTimeout(function () {
        $('.section2__logo').fadeIn();
    }, 5000);

    setTimeout(function () {
        $('.section2').fadeOut();
    }, 7000);

    setTimeout(function () {
        $('.section3').fadeIn();
    }, 9000);

    $('#bonjour').hide();
    $('#accueil').hide();

    $('#connexion').click(function () {

        $('.login').hide();

        setTimeout(function () {
            $('#bonjour').fadeIn();
        }, 1000);

        setTimeout(function () {
            $('#bonjour').fadeOut();
        }, 3000);

        setTimeout(function () {
            $('.accueil').fadeIn();
        }, 5000);




    });

    $('#map3').hide();
    $('#map4').hide();

    $('#aller').click(function () {

        $('#ecran').hide();
        $('#text').hide();

        setTimeout(function () {
            $('#map3').fadeIn();
        }, 1000);
    });

    $('#fin').click(function () {

        $('#map3').hide();

        setTimeout(function () {
            $('#map4').fadeIn();
        }, 1000);
    });

    $('.scan').hide();
    $('#ecran2').hide();
    $('#loading').hide();
    $('#felicitations').hide();

    $('#compris').click(function(){
        $('#ecran1').hide();
        $('#text1').hide();

        setTimeout(function (){
            $('.scan').fadeIn();
        }, 1000);

    });

    $('#valider').click(function(){
        $('.scan').hide();

        setTimeout(function (){
            $('#ecran2').fadeIn();
        }, 1000);
    });

    $('#compris2').click(function (){
        $('#ecran2').hide();
        $('.tapbar').hide();

        setTimeout(function (){
            $('#loading').fadeIn();
        }, 1000);

        setTimeout(function (){
            $('#loading').fadeOut();
        }, 3000);

        setTimeout(function (){
            $('#felicitations').fadeIn();
        }, 5000);
    });

    $('#detail').hide();

    $('#debardeur').click(function (){

        $('.femme__container-box').hide();

        setTimeout(function(){
            $('#detail').fadeIn();
        }, 1000);
    });


    $('#defis').hide();
    $('#environnement').hide();
    $('#compteur').hide();
    $('#decompte').hide();
    $('#countdown').hide();

    $('#choisisDefi').click(function (){
        $('#demo').hide();

        setTimeout(function(){
            $('#defis').fadeIn();
        }, 1000);
    });

    $('#suivantDefi').click(function (){
        $('#defis').hide();

        setTimeout(function (){
            $('#environnement').fadeIn();
        }, 1000);
    });

    $('#validerDefi').click(function (){
        $('#environnement').hide();
        $('#tapbarDefi').hide();
        $('#secondbar').hide();

        $('body').css('background-image', 'linear-gradient(to top, #0EBCA4 0%, #22D78C 100% )');

        setTimeout(function (){
            $('#compteur').fadeIn();
        }, 1000);
    });

    $('#commencerDefi').click(function (){
        $('#compteur').hide();
        $('#1').hide();
        $('#2').hide();
        $('#go').hide();

        setTimeout(function (){
            $('#countdown').fadeIn();
        }, 1000);

        setTimeout(function (){
            $('#3').fadeOut();
        }, 2000);

        setTimeout(function (){
            $('#2').fadeIn();
        }, 3000);

        setTimeout(function (){
            $('#2').fadeOut();
        }, 4000);

        setTimeout(function (){
            $('#1').fadeIn();
        }, 5000);

        setTimeout(function (){
            $('#1').fadeOut();
        }, 6000);

        setTimeout(function (){
            $('#go').fadeIn();
        }, 7000);

        setTimeout(function (){
            $('#go').fadeOut();
        }, 8000);

        setTimeout(function (){
            $('#decompte').fadeIn();
        }, 9000);


    });



});