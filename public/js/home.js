const btnMenu = document.querySelector("#check");
const navh = document.querySelector("#navbarhh");
const home = document.querySelector("#home");
btnMenu.addEventListener("click", function() {
    navh.classList.toggle("mostrar");
    home.classList.toggle("ibajar");

});