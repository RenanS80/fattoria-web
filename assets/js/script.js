import { owlCarousel } from "./owlCarousel.js";

owlCarousel();




let show = true; 

const menuSection = document.querySelector(".menu-section")
const brand = document.querySelector(".header-brand");
const menuToggle = menuSection.querySelector(".menu-toggle")
const nav = menuSection.querySelector("nav")
const navList = menuSection.querySelectorAll("nav ul li a")
const body = document.querySelector("body")

menuToggle.addEventListener("click", () => {

    body.style.overflow = show ? "hidden" : "initial"      // tira a barra de rolagem

    menuSection.classList.toggle("on", show)        // colocando o show garante que o toggle não vai bugar

    nav.classList.contains("on") ? brand.style.display = "none" : brand.style.display = "block";
    show = !show;
})

// Voltar ao estado inicial ao clicar sobre um item do menu (recolhe o toggle)
navList.forEach((item) => {
    item.addEventListener("click", () => {
        body.style.overflow = "initial";
        menuSection.classList.toggle("on", show)
        nav.classList.toggle("on", show);
        brand.style.display = "block";
        show = !show;
    })
})