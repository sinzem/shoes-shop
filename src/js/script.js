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
    keyboard: {
        enabled: true,
        pageUpDown: true,
    },
    loop: true,
    effect: 'fade',
});

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }

    if (targetElement.closest('[data-goto]')) {
        document.documentElement.classList.contains('menu-open') ?
            document.documentElement.classList.remove('menu-open') : null;
            
        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }
        e.preventDefault();
    }
}