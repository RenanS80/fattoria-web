export function owlCarousel() {

  $('.persona-card-group').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3,
        nav: true
      }
    }
  })

}