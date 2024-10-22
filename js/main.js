// menu
const menu = document.getElementById("menu")


// show menu
function showMenu() {

    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block" 
    }
}

// animated menu
function openMenu() {
    menu.style.height = "100%"
}

function closeMenu() {
    menu.style.height = "0%"
}




// navigation active link
document.addEventListener('DOMContentLoaded', () => {
    // links
const navLinkEls = document.querySelectorAll(".navLink") 
const windowPathname = window.location.pathname

    // for each nav
navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname

    if ((windowPathname === navLinkPathname) || 
    (windowPathname === '/' && navLinkPathname === '/index.html') ||
    (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLinkEl.style.color = "#1da4a6"
        navLinkEl.style.fontWeight = "400"
        }
    });
});


// image slider
const TOTAL_SLIDE = 13
let currentIndex = 0

const dots = document.querySelectorAll(".dots button")
const images = document.querySelectorAll(".images-for-slide img")

function showSlide(index) {
    images.forEach(image => image.style.display = "none")
    dots.forEach(dot => dot.style.backgroundColor = "transparent")

    images[index].style.display = "block"
    dots[index].style.backgroundColor = "#1da4a6"
}

function gotoSlide(index) {
    currentIndex = (TOTAL_SLIDE + index) % TOTAL_SLIDE
    showSlide(currentIndex)
}

function next() {
    gotoSlide(currentIndex + 1)
}

function prev() {
    gotoSlide(currentIndex - 1)
}

function dotClicked(index) {
    gotoSlide(index)
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => dotClicked(index))
})
    showSlide(currentIndex)