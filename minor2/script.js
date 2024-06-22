const locomotiveAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

const videoconAnimation = () => {
    var videocon = document.querySelector('#video-container')
var playbtn = document.querySelector('#play')

videocon.addEventListener('mouseenter', () => {
    gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
    });
});

videocon.addEventListener('mouseleave', () => {
    gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
    });
});

videocon.addEventListener('mousemove', (dets) => {
    gsap.to(playbtn, {
        left: dets.x-50,
        top: dets.y-80,
    });
});
}
const loadingAnimation = () => {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
    });
}
document.addEventListener('mousemove', (dets) => {
    gsap.to('#cursor', {
        left: dets.x,
        top: dets.y,
    });
});
const cursorAnimation = () => {
    var a = document.querySelectorAll('.child')
    a.forEach((elem) => {
        elem.addEventListener('mouseenter', () => {
            gsap.to('#cursor', {
                scale: 1,
            });
        });
    });
    a.forEach((elem) => {
        elem.addEventListener('mouseleave', () => {
            gsap.to('#cursor', {
                scale: 0,
            });
        });
    });
}

function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
        transform: "translateY(-230%)",
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });
      gsap.to("#nav-part2 #links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
          trigger: "#page1",
          scroller: "#main",
          start: "top 0",
          end: "top -5%",
          scrub: true,
        },
      });
}

const swiperJS = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
        },
      });
}

const page2Animation = () => {
    gsap.from('.elem', {
        x: '100%',
        opacity: 0,
        delay: 0.1,
        duration: 0.9,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 0%",
        }
    })
}

const page3Animation = () => {
    gsap.from('.child', {
        y: '100%',
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 0%",
        }
    })
}

const page4Animation = () => {
    gsap.from('.swiper-slide', {
        x: '100%',
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 0%",
        }
    })
}


videoconAnimation();
loadingAnimation();
cursorAnimation();
locomotiveAnimation();
navbarAnimation();
swiperJS();
page3Animation();
page2Animation();
page4Animation();