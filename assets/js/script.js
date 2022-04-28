let menuMobile = document.querySelector(".menu-burger")

menuMobile.addEventListener("click", function() {
    document.querySelector("body").classList.toggle("show-menu")
    document.querySelector(".menu-burger").classList.toggle("show-menu")
    document.querySelector(".container").classList.toggle("show-menu")
    document.querySelector(".nav-bar").classList.toggle("show-menu")
})