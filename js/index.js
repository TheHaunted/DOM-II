// Your code goes here
let destination = document.querySelectorAll('.destination');
destination.forEach(function(item){
    item.addEventListener('mouseover', () => {
        item.style.background = '#17A2B8';
    });
    item.addEventListener('mouseout', () => {
        item.style.background = 'white';
    });
});

let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(item => {
    item.addEventListener('selectstart', () => {
        item.style.border = '1px solid red';
    });
    item.addEventListener('copy', () => {
        item.style.color = 'blue';
    });
    item.addEventListener('cut', () => {
        item.style.color = 'red';
    });
});

let images = document.querySelectorAll('img');
images.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.style.border = '4px solid #17A2B8';
        document.querySelector('body').style.background = '#5b5b5b';
    });
    // item.addEventListener('drag', () => {
    //     document.querySelector('body').style.background = '#5b5b5b';
    // });
    item.addEventListener('dragend', () => {
        item.style.border = 'none';
        document.querySelector('body').style.background = 'white';
    });
});

function random(number) {
    return Math.floor(Math.random()*(number+1));
}

let page = document.querySelector('body');
page.addEventListener('wheel', () => {
    page.style.background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
});