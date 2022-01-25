const btnMenu = document.querySelector("#check");
const navh = document.querySelector("#navbarhh");
const consulta = document.querySelector("#consultas");
btnMenu.addEventListener("click", function() {
    navh.classList.toggle("mostrar");
    consulta.classList.toggle("bajarc");

});