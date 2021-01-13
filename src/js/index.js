import '../scss/main.scss';
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    delay: 150, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigger the animation
});

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    initialSlide: 5,
    slidesPerView: 1.4,
    spaceBetween: 14,
    centeredSlides: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
      },
    breakpoints: {
      768: {
        slidesPerView: 3.8,
        spaceBetween: 30,
        simulateTouch: false,
        shortSwipes: false,
        longSwipes: false,

      },
    }
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 600
  });