let menuDiv = document.querySelector('.nav-menu-div');
let menuButton = document.querySelector('.nav-menu-button');
let closeMenuButtonFP = document.querySelector('.close-nav-menu-full-page');
let closeMenuButton = document.querySelector('.close-nav-menu');

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', closeMenu);
closeMenuButtonFP.addEventListener('click', closeMenu);

function toggleMenu(){
    menuDiv.classList.toggle('closed');
    menuDiv.classList.toggle('open');
    menuButton.classList.toggle('x');
    closeMenuButtonFP.classList.toggle('hidden');
    closeMenuButtonFP.classList.toggle('visible');
};

function closeMenu(){
    menuDiv.classList.add('closed');
    menuDiv.classList.remove('open');
    menuButton.classList.remove('x');
    closeMenuButtonFP.classList.add('hidden');
    closeMenuButtonFP.classList.remove('visible');
};

window.onload = updateClosedClass;
window.onresize = updateClosedClass;

function updateClosedClass() {
    if(window.innerWidth >= 768) {
        menuDiv.classList.remove('closed');
    } else {
        menuDiv.classList.add('closed');
    }
};
let value1 = 2;
let value2 = 4;

value1 *= value1 + value2 * value2 / value1;
console.log(value1);