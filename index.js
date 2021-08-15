
const toggleBtn = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

console.log(toggleBtn);
console.log(navbarLinks);

toggleBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})