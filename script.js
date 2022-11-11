const toggleNav = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list')

toggleNav.addEventListener('click', () => {
    toggleNav.classList.toggle('close');
    navList.classList.toggle('active')
})