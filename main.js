//Funcionamiento click filtros

const filtroMarca = document.querySelector("#filtro-marca");
const flechaMarca = document.querySelector(".flecha-marca");
const botonesMarca = document.querySelector("#botones-filtrado-marca");

const filtroIntensidad = document.querySelector("#filtro-intensidad");
const flechaIntensidad = document.querySelector(".flecha-intensidad");
const botonesIntensidad = document.querySelector("#botones-filtrado-intensidad");

const filtroPeso = document.querySelector("#filtro-peso");
const flechaPeso = document.querySelector(".flecha-peso");
const botonesPeso = document.querySelector("#botones-filtrado-peso");

filtroMarca.addEventListener("click", () => {
    flechaMarca.classList.toggle("flecha-filtros-rotada");
    botonesMarca.classList.toggle("prendido");
});

filtroIntensidad.addEventListener("click", () => {
    flechaIntensidad.classList.toggle("flecha-filtros-rotada");
    botonesIntensidad.classList.toggle("prendido");
});

filtroPeso.addEventListener("click", () => {
    flechaPeso.classList.toggle("flecha-filtros-rotada");
    botonesPeso.classList.toggle("prendido");
});


//Funcionamiento botones filtrado

let botones = document.querySelector(".bf");
let botonesArray = Array.from(document.querySelectorAll("[id^='boton-']"));
let cardsArray = Array.from(document.querySelectorAll("[class^='card-']"));

const mostrarTarjetas = (indicesVisible) => {
    botones.style.display = "flex";
    cardsArray.forEach((card, index) => {
        card.style.display = indicesVisible.includes(index) ? "flex" : "none";
    });
};

botonesArray[0].addEventListener("click", () => mostrarTarjetas([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
botonesArray[1].addEventListener("click", () => mostrarTarjetas([0, 1]));
botonesArray[2].addEventListener("click", () => mostrarTarjetas([2, 3, 4]));
botonesArray[3].addEventListener("click", () => mostrarTarjetas([5, 6]));
botonesArray[4].addEventListener("click", () => mostrarTarjetas([7, 8, 9, 10]));
botonesArray[5].addEventListener("click", () => mostrarTarjetas([0, 3, 10]));
botonesArray[6].addEventListener("click", () => mostrarTarjetas([2, 4, 6, 7, 8, 9]));
botonesArray[7].addEventListener("click", () => mostrarTarjetas([1, 5]));
botonesArray[8].addEventListener("click", () => mostrarTarjetas([0, 1, 2, 3, 5, 6, 7, 8, 9]));
botonesArray[9].addEventListener("click", () => mostrarTarjetas([4, 10]));


//Funcionamiento barra de busqueda

let search = document.querySelector("#search");

document.addEventListener("keyup", e => {

    if (search.value != '') {
        document.querySelectorAll(".cafe").forEach(cafe => {
            cafe.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? cafe.style.display = "flex"
                : cafe.style.display = "none"
        })
    } else {
        todo()
    }
})

//Stock de los productos

let agregar1 = document.querySelector(".button-1");
let agregar2 = document.querySelector(".button-2");
let agregar3 = document.querySelector(".button-3");
let agregar4 = document.querySelector(".button-4");
let agregar5 = document.querySelector(".button-5");
let agregar6 = document.querySelector(".button-6");
let agregar7 = document.querySelector(".button-7");
let agregar8 = document.querySelector(".button-8");

const sinstock = () => {
    setTimeout(() => {
        Swal.fire("🤔Calculando los productos que quedan...");
    }, 0);
    setTimeout(() => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Nos quedamos sin Stock 😢",
        });
    }, 2500);

};

const constock = () => {
    setTimeout(() => {
        Swal.fire("🤔Calculando los productos que quedan...");
    }, 0);
    setTimeout(() => {
        Swal.fire({
            title: "Perfecto!",
            text: "Agregado correctamente al carrito 🛒",
            icon: "success"
        });
    }, 2500);
};

agregar1.addEventListener("click", constock);
agregar2.addEventListener("click", sinstock);
agregar3.addEventListener("click", constock);
agregar4.addEventListener("click", constock);
agregar5.addEventListener("click", constock);
agregar6.addEventListener("click", constock);
agregar7.addEventListener("click", sinstock);
agregar8.addEventListener("click", constock);


// Fetch y JSON

const lista = document.querySelector(".los-mas-vendidos-ul");

fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((producto) => {
            const li = document.createElement("li");
            li.innerHTML = `    
         <h2>${producto.id}</h2>
         <h2>${producto.nombre}</h2>
         <p>${producto.precio}</p>
         
       `;
            lista.append(li);
        });
    });

// Añadir al carrito

    const boton1 = document.querySelector(".button-1");    