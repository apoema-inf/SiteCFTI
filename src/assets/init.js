$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    setInterval(function() {
        $('.carousel').carousel('next');
      }, 4000); // every 2 seconds
})