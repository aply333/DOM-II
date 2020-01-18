// Your code goes here
let navLinks = document.querySelectorAll('.nav-link');
let letGoImg = document.querySelector('.img-content img');
let logoHeading = document.querySelector('.logo-heading');
let introH2 = document.querySelector('.intro h2');
let body = document.querySelector('body');
let introPara = document.querySelector('.intro p');


// navLinks.forEach((cV, index) =>{})

letGoImg.addEventListener('dblclick', () => {
    letGoImg.setAttribute('src', './img/fun-bus.jpg')
})

logoHeading.addEventListener('select', () => {
    introH2.style.color = 'green';
})

body.addEventListener('keydown', () =>{
    body.style.backgroundColor = "red";
})
logoHeading.addEventListener('mouseover', () =>{
    introH2.style.color = 'white';
})
body.addEventListener('wheel', () => {
    introH2.style.backgroundColor = 'purple';
})
body.addEventListener('keyup', ()=>{
    body.style.backgroundColor = "grey";
})
body.addEventListener('contextmenu', () =>{
    introPara.textContent = 'A developer whose goal is one massive obstruction to any thought of design.'
})