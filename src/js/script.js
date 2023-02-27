"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const searchMenu = document.querySelector(".search_drop-down");
    const search = document.querySelector(".menu-bottom__search");
    const input = document.querySelector(".search-input");
    search.addEventListener("click", () => {
        searchMenu.classList.toggle("search_active");
        input.classList.toggle("search-input_active");
    });
});

const swiper = new Swiper(".image-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // simulateTouch: true,
    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
    loop: true,
    effect: 'fade',
});