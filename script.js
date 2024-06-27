const menuButton = document.querySelector('.menubutton');

const abc = document.querySelector('.abc');

menuButton.addEventListener('click', ()=> {
    abc.classList.toggle('dropdown');
    menuButton.style.transform = 'rotate(180deg)';
})

const submit = document.querySelector('#submit');

submit.addEventListener('submit', ()=> {
    
})