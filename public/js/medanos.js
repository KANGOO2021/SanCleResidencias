const btnMenu = document.querySelector("#check");
const navh = document.querySelector("#navbarhh");
const medanos = document.querySelector("#medanos");
btnMenu.addEventListener("click", function() {
    navh.classList.toggle("mostrar");
    medanos.classList.toggle("mbajar");

});