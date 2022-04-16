window.addEventListener('scroll', function () {
 const header = document.querySelector('header');
 header.classList.toggle('sticky', window.scrollY > 0);
});

function menu() {
 const menuHamburger = document.querySelector('.menuHamburger');
 const navigation = document.querySelector('.navigation__list');
 menuHamburger.classList.toggle('active');
 navigation.classList.toggle('active');
}
