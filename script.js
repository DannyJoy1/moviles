const menuIcon = document.getElementById('menu-ico');
const showMenu = document.getElementById('mobile-menu');
let menuOpen = false;


menuIcon.addEventListener('click', () => {

        showMenu.classList.toggle('show-menu');


});