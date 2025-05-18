  document.addEventListener('DOMContentLoaded', function () {

    const solucoesSplide = new Splide('.solucoes-splide', {
      type       : 'loop',
      perPage    : 4,
      focus      : 'center',
      gap        : '0.2rem',
      arrows     : false,
      pagination : false,
      autoScroll : {
        speed: 3, // aumente para ver o efeito
      },
      breakpoints: {
        1024: { perPage: 3 },
        768 : { perPage: 2, padding: '0.5rem', gap: '0.5rem' },
        480 : { perPage: 2, padding: '0.5rem', gap: '0.5rem' },
      }
    });

    solucoesSplide.mount( window.splide.Extensions );
  });