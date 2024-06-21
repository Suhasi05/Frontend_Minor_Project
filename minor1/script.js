const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const page4Animation = () => {
    var elemC = document.querySelector('.elem-con');
var fixed = document.querySelector('#fixed-img');

elemC.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
});


var elems = document.querySelectorAll(".elem");

elems.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        var img = e.getAttribute('data-img');
        fixed.style.backgroundImage = `url(${img})`
    })
});
}


const swiperAnimation = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

page4Animation();
swiperAnimation();


// var menu = document.querySelector('nav h3');
// var full = document.querySelector('#full-scr');
// var navImg = document.querySelector('nav img');
// let flag = 0;

// menu.addEventListener('click', function() {
//     if (flag == 0) {
//         full.style.top = '0';
//         navImg.style.opacity = '0';
//         flag = 1;
//     } else {
//         full.style.top = '-100%';
//         navImg.style.opacity = '1';
//         flag = 0;
//     }
// });

var loader = document.querySelector('#loader');
setTimeout(() => {
    loader.style.top = "-100%";
}, 4000)