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