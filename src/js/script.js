const infoMe = document.querySelector(".home-description ");

function revealInfo() {
    infoMe.classList.add("reveal");
}

window.addEventListener("DOMContentLoaded", revealInfo);

//
//

const menuMob = document.querySelector(".menu-mobile");

function openModal() {
    menuMob.style.display = "initial";
    menuMob.classList.remove("menuOff");
    menuMob.classList.add("menuShow");
}

function closeModal() {
    menuMob.classList.remove("menuShow");
    menuMob.classList.add("menuOff");
}
