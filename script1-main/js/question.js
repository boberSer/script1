let frame = document.querySelectorAll('.questions__grid-elem');
let cross = document.querySelectorAll('.cross');

cross.forEach((item) => {
    frame.forEach((frames) => {
        item.onclick = () => {
            frames.style.maxHeight = '256px'
        }
    })
});

