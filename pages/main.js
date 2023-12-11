let boton2 = document.getElementsByClassName("boton-2");

const respuesta = () => {
    console.log("Hola chicos");
};


//boton2.addEventListener("click", respuesta);

boton2.onclick = respuesta;

