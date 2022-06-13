window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});

const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
toggle.addEventListener('click' ,function(){
    toggle.classList.toggle('toggled');
    navbar.classList.toggle('collups')
});