$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.up-arrow').fadeIn(200);
    } else {
        $('.up-arrow').fadeOut(200);
    }
});


$('.up-arrow').on('click', function() {
    $("html, body").animate({scrollTop: 0},1);
});

$('.owl-two').owlCarousel({
    loop:true,
    margin:200,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:true,
            dots:false
        },
        600:{
            items:3,
            nav:false,
            dots:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false,
            dots:false
        }
    }
})

        $('.owl-carousel').owlCarousel({
    loop:true,
    margin:-10,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:true,
            dots:false
        },
        600:{
            items:3,
            nav:false,
            dots:false
        },
        1000:{
            items:10,
            nav:true,
            loop:false,
            dots:false
        }
    }
})

