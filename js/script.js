$(function(){
   $('.header__menu-burger').click(function(){
      $('.header__menu-burger,.header__body,.header__links').toggleClass('active');
   });
});

$(function(){
   $('.main__sliders').slick({
      dots: true,
      slidesToScroll: 5,
      slidesToShow: 5,
      infinite: false,
      arrows: false,
      responsive: [
         {
         breakpoint: 1880,
            settings: {
               slidesToScroll: 3,
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 1520,
               settings: {
                  slidesToScroll: 2,
                  slidesToShow: 3,
                  dots: false
               }
            },
            {
               breakpoint: 1300,
                  settings: {
                     slidesToScroll: 1,
                     slidesToShow: 2,
                     dots: false
                  }
               },
               {
                  breakpoint: 766,
                     settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        dots: false
                     }
                  }
         ]
   });
   
})

