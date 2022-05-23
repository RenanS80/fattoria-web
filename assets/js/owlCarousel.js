export function owlCarousel() {

  $(document).ready(function(){
    $(".persona-card-group").owlCarousel({
      dots: true,
      nav: true,
      margin: 16,
      stagePadding: 8,
      loop: true,
      responsiveClass: true,
      responsiveBaseElement: "#persona .owl-carousel",
      responsive: {
          0: {
            items: 1.2,
            center: true,
            nav: false
          },
          640: {
            items: 2,
            nav: false
          },
          800: {
            items: 3,
          }
      }
    });
  });

  $(document).ready(function() {
    $('.service-card-group').owlCarousel({
      dots: false,
      nav: false,
      loop: true,
      margin: 16,
      stagePadding: 8,
      responsiveClass: true,
      responsiveBaseElement: "#service .owl-carousel",
      responsive: {
        0: {
          items: 1.2,
        },
        400: {
          items: 1.5
        },
        600: {
          items: 2
        },
        900: {
          items: 3
        }
      }
    })
  })
}