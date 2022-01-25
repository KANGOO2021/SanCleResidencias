const btnform = document.querySelector("#send");
btnform.addEventListener("click", function() {

    var nombre, email, telefono, fecha_ingreso, fecha_salida, mensaje;

    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    fecha_ingreso = document.getElementById("fecha_ingreso").value;
    fecha_salida = document.getElementById("fecha_salida").value;
    mensaje = document.getElementById("mensaje").value;



    if (nombre == "" || email == "" || telefono == "" || fecha_ingreso == "" || fecha_salida == "" || mensaje == "") {

        Swal.fire({
            icon: 'error',
            title: 'Mensaje',
            text: 'Se deben completar todos los campos',
            position: 'top-end',
            allowOutsideClick: false,
            timer: 10000


        });


    } else {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje',
            text: 'Enviado exitosamente!',
            allowOutsideClick: false
        });
        setTimeout(function() {
            location.href = "../index.html"
        }, 1000 * 3);
    }
});