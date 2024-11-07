let textOne = document.querySelector('.active-f');
let textTwo = document.querySelector('.active-s');
let textThree = document.querySelector('.active-t');

let inputOne = document.querySelector('.btn1');
let inputTwo = document.querySelector('.btn2');
let inputThree = document.querySelector('.btn3');
 



inputOne.addEventListener('click', function () {
    inputOne.classList.add('blue');
    inputTwo.classList.remove('blue');
    inputThree.classList.remove('blue');

    textOne.style.translate = '0%'
    textTwo.style.translate = '100%'
    textThree.style.translate = '200%'
})

inputTwo.addEventListener('click', function () {
    inputOne.classList.remove('blue');
    inputThree.classList.remove('blue');
    inputTwo.classList.add('blue');
    textOne.style.translate = '-150%'
    textTwo.style.translate = '-100%'
    textThree.style.translate = '50%'

})

inputThree.addEventListener('click', function () {
    inputOne.classList.remove('blue');
    inputTwo.classList.remove('blue');
    inputThree.classList.add('blue');
    textOne.style.translate = '-150%'
    textTwo.style.translate = '-250%'
    textThree.style.translate = '-200%'
})