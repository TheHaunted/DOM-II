// Your code goes here
let destination = document.querySelectorAll('.destination');
destination.forEach(function(item){
    item.addEventListener('mouseover', () => {
        item.style.background = '#17A2B8';
    });
    item.addEventListener('mouseout', () => {
        item.style.background = 'white';
    })
});

let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(item => {
    item.addEventListener('selectstart', () => {
        item.style.border = '1px solid red';
    });
});

let images = document.querySelectorAll('img');
images.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.style.border = '4px solid #17A2B8';
    });
    item.addEventListener('drag', () => {
        document.querySelector('body').style.background = '#5b5b5b';
    });
    item.addEventListener('dragend', () => {
        item.style.border = 'none';
        document.querySelector('body').style.background = 'white';
    });
});

