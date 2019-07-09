let blocks = document.querySelectorAll('.block');

function toTop(block){
    this.block = block;
    this.block.parentNode.prepend(this.block);
}

function moveRight(block){
    this.block = block;
    console.log(current);
    current++;
}

blocks.forEach(block => {
    block.style.position = 'relative';
    current = block.style.left;
    block.addEventListener('click', () => toTop(block));
    block.addEventListener('mousedown', () => moveRight(block));
});

