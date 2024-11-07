let pos1 = document.querySelector('.screen5__pos1');
let pos2 = document.querySelector('.screen5__pos2');
let pos3 = document.querySelector('.screen5__pos3');
let pos4 = document.querySelector('.screen5__pos4');

pos1.addEventListener('click', function() {
    pos1.style.top = '160px'
    pos1.style.left = '382px'
    pos1.style.zIndex = '5'
})

pos2.addEventListener('click', function() {
    pos2.style.top = '352px'
    pos2.style.right = '55px'
    pos2.style.zIndex = '6'
})

pos3.addEventListener('click', function() {
    pos3.style.bottom = '80px'
    pos3.style.left = '220px'
    pos3.style.zIndex = '0'
})

pos4.addEventListener('click', function() {
    pos4.style.top = '216px'
    pos4.style.left = '56px'
    pos4.style.zIndex = '0'
})