let blocks = document.querySelectorAll('.block');

function toTop(block){
    this.block = block;
    
    this.block.parentNode.prepend(this.block);
}

blocks.forEach(block => {
    block.addEventListener('click', () => toTop(block));
});