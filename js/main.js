const navBar = document.querySelector('.navBar-header-mobile');
const navBar2 = document.querySelector('.navBar-mobile');
const buttonNavBar = document.querySelector('.navButton-container').addEventListener('click', toggleNavBar);
const buttonCloseNavBar = document.querySelector('.navButton-close').addEventListener('click', toggleNavBar);
const body = document.querySelector('body');

function toggleNavBar() {
    navBar.classList.toggle('showNavBar');
    if (navBar.classList.contains('showNavBar')) {
        body.style.position = 'fixed';
    } else {
        body.style.position = 'initial';
    }
};
