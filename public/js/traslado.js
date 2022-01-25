const btnMenu = document.querySelector("#check");
const navh = document.querySelector("#navbarhh");
const traslado = document.querySelector("#trasladot");
btnMenu.addEventListener("click", function() {
    navh.classList.toggle("mostrar");
    traslado.classList.toggle("bajart");

});