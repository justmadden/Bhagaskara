/* Scroll */
$('a[href^="#"]').click(function () {

    var elementClick=$(this).attr("href");
    var destination=$(elementClick).offset().top;
    console.log(this);
    if(elementClick=="#myNav")
    {
        $('body').animate({scrollTop:destination},1000);
        return false;
    }else if($('#myNav').hasClass("navbar-fixed-top"))
    {
        $('body').animate({scrollTop:destination},1000);
        return false;
    }else
    {
        $('body').animate({scrollTop:destination-150},1000);
        return false;
    }

});

$(document).ready(function(){
   $('.mySlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        infinite:true,
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
        responsive: [
           {
               breakpoint: 1000,
               settings: {

                   slidesToShow:1
               }
           }]
    });
    $('.MySliderTestimonials').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots:true,
        arrows:false
    });

});
var firstPos;
var b=true;
$(document).scroll(function () {
    var navPos=$('#myNav').offset().top-$(window).scrollTop();
    if(b)
    {
        firstPos=$('#myNav').offset().top;
        b=false;
    }
    if(firstPos>$(window).scrollTop())
    {
        $('#myNav').removeClass("navbar-fixed-top");
        $('#myNav').css("padding","50px 0px");
        return;
    }
    if(navPos+30<=0)
    {
        $('#myNav').addClass("navbar-fixed-top");
        $('#myNav').css("padding","10px 0px");
    }


    //console.log(navPos);

});




