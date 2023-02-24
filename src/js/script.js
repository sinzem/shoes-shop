"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const searchMenu = document.querySelector(".search_drop-down");
    const search = document.querySelector(".menu-bottom__search");

    search.addEventListener("click", () => {
        searchMenu.classList.toggle("search_active");
    });
});

const swiper = new Swiper(".image-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    simulateTouch: true,
    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
    slidesPerView: 1,
    loop: true,
});