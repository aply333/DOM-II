// Your code goes here
let header = document.querySelector(".main-navigation");
let navLinks = document.querySelectorAll('.nav-link');
let letGoImg = document.querySelector('.img-content img');
let logoHeading = document.querySelector('.logo-heading');
let introH2 = document.querySelector('.intro h2');
let body = document.querySelector('body');
let introPara = document.querySelector('.intro p');
let introImg = document.querySelector('.intro img');
let wholePage = document.querySelector('html');

// navLinks.forEach((cV, index) =>{})

header.addEventListener('click', ()=>{
    header.style.backgroundColor ='orange';
})
navLinks[0].addEventListener('click',()=>{
    event.stopPropagation();
    navLinks[0].style.color = 'blue';
})

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

introImg.addEventListener('dragend', ()=>{
    alert("You Dragged The Bus!")
})

introPara.addEventListener('copy', () =>{
    alert("Hey I didn't write that.")
})
wholePage.addEventListener('mouseleave', ()=>{
    alert("GET BACK HERE!!!!")
})
