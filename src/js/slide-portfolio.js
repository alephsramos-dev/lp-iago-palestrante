document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide-portfolio', {
      type    : 'loop',
      focus: 'center',
      perPage : 1,
      padding: '15rem',
      gap     : '1rem',
      autoplay: true,
      pauseOnHover: true,
      arrows: true,
      pagination: false,
      breakpoints: {
        768: {
            padding: '0rem',
            gap: '1rem',
        }
      }
    });

    // Progresso
    var bar = document.querySelector('.my-slider-progress-bar');

    splide.on('mounted move', function () {
      var end  = splide.Components.Controller.getEnd() + 1;
      var rate = Math.min((splide.index + 1) / end, 1);
      bar.style.width = String(100 * rate) + '%';
    });

    splide.mount();
  });