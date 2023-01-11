"use strict";

const body = document.querySelector("body");

const bg = document.querySelector(".header__nav");
const nav = document.querySelector(".header__nav-list");

const openBtn = document.querySelector(".header__nav__open");
const closeBtn = document.querySelector(".header__nav__close");

//

const openNavbar = function () {
    bg.style.opacity = "1";
    bg.style.visibility = "visible";
    bg.style.pointerEvents = "revert";

    body.style.overflow = "hidden";
    nav.style.right = "0";

    setTimeout(() => {
        closeBtn.style.opacity = "1";
    }, 150);
};

const closeNavbar = function () {
    bg.style.opacity = "0";
    bg.style.visibility = "hidden";

    body.style.overflow = "revert";
    nav.style.right = "-256px";
    closeBtn.style.opacity = "0";
};

//

openBtn.addEventListener("click", openNavbar);
closeBtn.addEventListener("click", closeNavbar);
