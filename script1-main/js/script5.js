let pos1 = document.querySelector('.reviews-item._first');
let pos2 = document.querySelector('.reviews-item._second');
let pos3 = document.querySelector('.reviews-item._third');
let pos4 = document.querySelector('.reviews-item._fourth');
let button = document.querySelector('.reviews-item__btn')
let grid = document.querySelector('.reviews-list');
let reviews = document.querySelectorAll('.reviews-item');

const REVIEW_CLASSES = ['_first', '_second', '_third', '_fourth'];

const reviewItems = [pos1, pos2, pos3, pos4];

reviews.forEach((item) => {
    item.onclick = () => {
        reviewItems.unshift(reviewItems.pop())
        reviewItems.forEach((item, index) => {
            item.classList.remove(REVIEW_CLASSES.at(index - 1))
            item.classList.add(REVIEW_CLASSES.at(index))
        })
    }
})

button.addEventListener('click', function() {

})



