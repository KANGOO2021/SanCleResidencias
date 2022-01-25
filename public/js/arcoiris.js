const btnMenu = document.querySelector("#check");
const navh = document.querySelector("#navbarhh");
const arcoiris = document.querySelector("#arcoiris");
btnMenu.addEventListener("click", function() {
    navh.classList.toggle("mostrar");
    arcoiris.classList.toggle("abajar");

});