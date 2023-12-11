//Funcionamiento botones de la izquierda

let botones = document.getElementsByClassName("botones");

let boton1 = document.getElementById("boton-1");
let boton2 = document.getElementById("boton-2");
let boton3 = document.getElementById("boton-3");
let boton4 = document.getElementById("boton-4");
let boton5 = document.getElementById("boton-5");

let card1 = document.getElementsByClassName("card-1");
let card2 = document.getElementsByClassName("card-2");
let card3 = document.getElementsByClassName("card-3");
let card4 = document.getElementsByClassName("card-4");
let card5 = document.getElementsByClassName("card-5");
let card6 = document.getElementsByClassName("card-6");
let card7 = document.getElementsByClassName("card-7");
let card8 = document.getElementsByClassName("card-8");


const todo = () => {
    botones[0].style.display = "flex";
    card1[0].style.display = "flex";
    card2[0].style.display = "flex";
    card3[0].style.display = "flex";
    card4[0].style.display = "flex";
    card5[0].style.display = "flex";
    card6[0].style.display = "flex";
    card7[0].style.display = "flex";
    card8[0].style.display = "flex";
};

boton1.addEventListener("click", todo);

const nescafe = () => {
    botones[0].style.display = "flex";
    card1[0].style.display = "flex";
    card2[0].style.display = "flex";
    card3[0].style.display = "none";
    card4[0].style.display = "none";
    card5[0].style.display = "none";
    card6[0].style.display = "none";
    card7[0].style.display = "none";
    card8[0].style.display = "none";
};

boton2.addEventListener("click", nescafe);

const martinez = () => {
    botones[0].style.display = "flex";
    card1[0].style.display = "none";
    card2[0].style.display = "none";
    card3[0].style.display = "flex";
    card4[0].style.display = "flex";
    card5[0].style.display = "none";
    card6[0].style.display = "none";
    card7[0].style.display = "none";
    card8[0].style.display = "none";
};

boton3.addEventListener("click", martinez);

const starbucks = () => {
    botones[0].style.display = "block";
    card1[0].style.display = "none";
    card2[0].style.display = "none";
    card3[0].style.display = "none";
    card4[0].style.display = "none";
    card5[0].style.display = "flex";
    card6[0].style.display = "flex";
    card7[0].style.display = "none";
    card8[0].style.display = "none";
};

boton4.addEventListener("click", starbucks);

const cabrales = () => {
    botones[0].style.display = "block";
    card1[0].style.display = "none";
    card2[0].style.display = "none";
    card3[0].style.display = "none";
    card4[0].style.display = "none";
    card5[0].style.display = "none";
    card6[0].style.display = "none";
    card7[0].style.display = "flex";
    card8[0].style.display = "flex";
};

boton5.addEventListener("click", cabrales);

//Funcionamiento barra de busqueda

let search = document.getElementById("search");

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

let agregar1 = document.getElementsByClassName("button-1")[0];
let agregar2 = document.getElementsByClassName("button-2")[0];
let agregar3 = document.getElementsByClassName("button-3")[0];
let agregar4 = document.getElementsByClassName("button-4")[0];
let agregar5 = document.getElementsByClassName("button-5")[0];
let agregar6 = document.getElementsByClassName("button-6")[0];
let agregar7 = document.getElementsByClassName("button-7")[0];
let agregar8 = document.getElementsByClassName("button-8")[0];

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
    }, 3000);

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
    }, 3000);
};

agregar1.addEventListener("click", constock);
agregar2.addEventListener("click", sinstock);
agregar3.addEventListener("click", constock);
agregar4.addEventListener("click", constock);
agregar5.addEventListener("click", constock);
agregar6.addEventListener("click", constock);
agregar7.addEventListener("click", sinstock);
agregar8.addEventListener("click", constock);


