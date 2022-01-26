$(document).ready(function(){
/* ====================== JS Code Here ========================== */

/* ====================== Mobile Responsive Navigation ========================== */

    $('.js--menu').click(function() {
        var nav = $('.js--nav__list');

        nav.slideToggle(200);
        var icon = $('.js--menu');
        
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
        $(window).on('resize', function() {

            if ($(this).width() > 600) {
            $('.nav__list').css({
                'display': 'inline-block'
            });
            } else {
            $('.nav__list').css({
                'display': 'none'
            });
            }
        });
    });

/* ====================== Owl Carousel ========================== */

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        autoplay:false,
        autoplayTimeout:1500,
        autoplayHoverPause:false,
        responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:1,
              nav:false
          },
          900:{
              items:1,
              nav:true,
              loop:false
          },
          1200:{
              items:1,
              nav:true,
              loop:false
          }
        }
    
    });
    $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
    });


    /* ====================== Isotope Plugin =================== */

    $('.featured__grid').isotope({
        // options
        itemSelector: '.featured__grid--item',
        layoutMode: 'fitRows'
    });
    $('.featured__item').click(function(){
        $('.featured__item').removeClass('featured__item-active');
        $(this).addClass('featured__item-active');

        var selector = $(this).attr('data-filter');
        $('.featured__grid').isotope({
            filter: selector
        });
        return false;
    });

});

/* =========================  Swiper JS ============================ */
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: '4',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

/* ======================  Smooth Scroll ========================== */
var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 900
});

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.gallery__grid--item, .heading-secondary, .count__para,.gallery__masonry,.heading-tertiary__mission, .hero__photo`)
sr.reveal(`.sponsors__item, .footer__grid--content`,{interval: 100})
sr.reveal(`.heading-primary, .about__photo, .study__flex--photo,.mission__para, .form__text, .hero__text--left-para`,{origin: 'left'})
sr.reveal(`.about__text, .about__para, .study__flex--text, .mission__flex--right, .form__btn`,{origin: 'right'})