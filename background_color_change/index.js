let but = document.querySelector('.button');
const body = document.querySelector('body');
const color = ['red' , 'white','pink','blue','black','green','orange'];

but.addEventListener('click',changebg);

function changebg(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex] 
}

