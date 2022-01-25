const btnMenu = document.querySelector("#check");
const navh = document.querySelector("#navbarhh");
const contact = document.querySelector("#contact");
btnMenu.addEventListener("click", function() {
    navh.classList.toggle("mostrar");
    contact.classList.toggle("bajar");

});