document.addEventListener('DOMContentLoaded', function () {
  const slider = new Slider('#mySwiper')
  slider.start({ delay: 2000 })

  setTimeout(() => {
    slider.stop()
  }, 60000)
})

class Slider {
  constructor(el) {
    this.el = el
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      effect: "coverflow",
      // effect: "fade",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      speed: 1000,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false
      // },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  start(options = {}) {
    options = Object.assign({
      delay: 3000,
      disableOnInteraction: false
    }, options)

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }

  stop() {
    this.swiper.autoplay.stop()
  }
}



