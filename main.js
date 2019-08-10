const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burgerMenu");
const burgerLines = document.querySelector(".burger span")

const firstDot = document.querySelector(".controlDots input:nth-of-type(1)")
const secondDot = document.querySelector(".controlDots input:nth-of-type(2)")
const slidersActive = [...document.querySelectorAll(".testimonials .slider")];


const burgerElements = [...document.querySelectorAll(".burgerMenu ul:nth-of-type(1) li a")];

const animationList = [
    document.querySelector('.homeSocials li:nth-of-type(1)  '),
    document.querySelector('.homeSocials li:nth-of-type(2)  '),
    document.querySelector('.homeSocials li:nth-of-type(3)  '),
    document.querySelector('.homeSocials li:nth-of-type(4) '),
    document.querySelector('.homeSocials li:nth-of-type(5) '),
    document.querySelector('.aboutWrap'),
    document.querySelector('.whatWeDo'),
    document.querySelector('.servicesListElement:nth-of-type(1)'),
    document.querySelector('.servicesListElement:nth-of-type(2)'),
    document.querySelector('.servicesListElement:nth-of-type(3)'),
    document.querySelector('.servicesListElement:nth-of-type(4)'),
    document.querySelector('.showcase .portfolioText .portfolioTextWrapper'),
    document.querySelector('.showcase .portfolioPhoto:nth-of-type(1)'),
    document.querySelector('.showcase .portfolioPhoto:nth-of-type(2)'),
    document.querySelector('.showcase .portfolioPhoto:nth-of-type(3)'),
    document.querySelector('.showcase .portfolioPhoto:nth-of-type(4)'),
    document.querySelector('.showcase .portfolioPhoto:nth-of-type(5)'),
    document.querySelector('.showcase .portfolioPhoto:nth-of-type(6)'),
    document.querySelector('.testimonials'),
    document.querySelector('.contact .contactText')

];


/*-------------------burger--------------------------- */
const activeMenu = () => {
    burgerLines.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    burger.classList.toggle("active");
}
for (let i = 0; i < burgerElements.length; i++) {
    burgerElements[i].addEventListener("click", () => {
        burgerLines.classList.toggle("active");
        burgerMenu.classList.toggle("active");
        burger.classList.toggle("active");
    })
}
/*-------------------sliders--------------------------- */
const sliderFirstChange = () => {
    if (slidersActive[0].classList.contains('active')) {
        return
    } else {
        slidersActive[1].classList.remove('active')
        slidersActive[0].classList.add('active')
    }

}
const sliderSecondChange = () => {
    if (slidersActive[1].classList.contains('active')) {
        return
    } else {
        slidersActive[0].classList.remove('active')
        slidersActive[1].classList.add('active')
    }

}
/*-------------------scrollReveal--------------------------- */
ScrollReveal().reveal('.home .homeText', {
    easing: 'ease-in'
});

ScrollReveal().reveal(animationList, {
    distance: '80%',
    opacity: 0,
    delay: 100,
    duration: 1000,

});



burger.addEventListener("click", activeMenu);
firstDot.addEventListener("click", sliderFirstChange);
secondDot.addEventListener("click", sliderSecondChange);
/*-------------------burgerMenuBackground--------------------------- */
window.addEventListener("scroll", function () {
    if (window.scrollY < 300) {
        burger.classList.remove("black");
    }
    if (window.scrollY >= 300) {
        burger.classList.add("black");
    }
})
