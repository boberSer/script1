let slideFirst = document.querySelector('.active-f');
let slideSecond = document.querySelector('.active-s');
let slideThird = document.querySelector('.active-t');

let inputFirst = document.querySelector('.btn1');
let inputSecond = document.querySelector('.btn2');
let inputThird = document.querySelector('.btn3');
 



inputFirst.addEventListener('click', function () {
    inputFirst.classList.add('blue');
    inputSecond.classList.remove('blue');
    inputThird.classList.remove('blue');

    slideFirst.style.translate = '0%'
    slideSecond.style.translate = '100%'
    slideThird.style.translate = '200%'
})

inputSecond.addEventListener('click', function () {
    inputFirst.classList.remove('blue');
    inputThird.classList.remove('blue');
    inputSecond.classList.add('blue');
    slideFirst.style.translate = '-150%'
    slideSecond.style.translate = '-100%'
    slideThird.style.translate = '50%'

})

inputThird.addEventListener('click', function () {
    inputFirst.classList.remove('blue');
    inputSecond.classList.remove('blue');
    inputThird.classList.add('blue');
    slideFirst.style.translate = '-150%'
    slideSecond.style.translate = '-250%'
    slideThird.style.translate = '-200%'
})