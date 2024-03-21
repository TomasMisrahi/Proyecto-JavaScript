let test = prompt("Si queres saber si sos capaz de ser streamer coloque si, pero si estas buscando componentes esenciales para strimear coloque productos");

while (test != "productos") {
    let puntuacion = 0;
    let error = 0;
    let pregunta = 0;

    function acertaste() {
        puntuacion = puntuacion + 1;
        alert("Genial! Seguimos con la siguiente pregunta");
    }

    function erraste() {
        error = error + 1;
        alert("No pasa nada! Seguimos con otra pregunta");
    }

    function final() {
        alert("A continuación tendras nuestra resolución final..")
    }


    while (pregunta < 10 && error < 5) {
        switch (pregunta) {
            case 0:
                alert("¿Tenés una computadora a tu disponibilidad? Responder siempre con si o con no");
                let respuesta1 = prompt("Ingrese su respuesta ");
                if (respuesta1.toLowerCase() === "si" && "SI") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 1:
                alert("¿Tenés un micrófono disponible?");
                let respuesta2 = prompt("Ingrese su respuesta");
                if (respuesta2.toLowerCase() === "si" && "SI") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 2:
                alert("¿Y tenes una cámara para poder usar?");
                let respuesta3 = prompt("Ingrese su respuesta");
                if (respuesta3.toLowerCase() === "si" && "SI") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 3:
                alert("¿Consideras que tenes una conexión a internet estable?");
                let respuesta4 = prompt("Ingrese su respuesta");
                if (respuesta4.toLowerCase() === "si" && "SI") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 4:
                alert("¿Sentis que tu computadora es capaz de soportar muchas aplicaciones simultaneamente?");
                let respuesta5 = prompt("Ingrese su respuesta");
                if (respuesta5.toLowerCase() === "si" && "SI") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 5:
                alert("¿Crees que vas a tener una buena constancia en el asunto?");
                let respuesta6 = prompt("Ingrese su respuesta");
                if (respuesta6.toLowerCase() === "si" && "SI") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 6:
                alert("¿Sentis que te faltaria motivación diaria?");
                let respuesta7 = prompt("Ingrese su respuesta");
                if (respuesta7.toLowerCase() === "no" && "NO") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 7:
                alert("¿Estarias dispuesto a limitarte en otras areas (salidas, deportes, hobbies, etc)?");
                let respuesta8 = prompt("Ingrese su respuesta");
                if (respuesta8.toLowerCase() === "si" && "SI") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 8:
                alert("Invertirias económicamente hablando para mejorar la calidad de tu stream?");
                let respuesta9 = prompt("Ingrese su respuesta");
                if (respuesta9.toLowerCase() === "si" && "SI") {
                    acertaste();
                }
                else {
                    erraste();
                }
                pregunta = pregunta + 1;
                break;

            case 9:
                alert("Ultima pregunta: Si te digo de comenzar a strimear mañana a primera hora, lo harias?");
                let respuesta10 = prompt("Ingrese su respuesta");
                if (respuesta10.toLowerCase() === "si" && "SI") {
                    final();
                }
                else {
                    final();
                }
                pregunta = pregunta + 1;
                break;

            default:
                break;
        }
    }

    if (error === 5) {
        alert("Segun las respuestas puestas consideramos que no eres capaz de ser streamer 😢. Puntuación final: " + puntuacion + "/10." + " Seguramente andes necesitando componentes elementales para strimear 🖱");
    }
    else {
        alert("Sos totalmente apto para ser streamer 😎");
    }

    test = prompt("Si queres hacer el test de vuelta coloque si, de lo contrario presione el boton de cancelar");
}

const item = [
    { categoria: "principal", nombre: "computadora gamer", coste: 1500000 },
    { categoria: "principal", nombre: "micrófono", coste: 100000 },
    { categoria: "principal", nombre: "cámara", coste: 80000 },
    { categoria: "principal", nombre: "auriculares", coste: 65000, },
    { categoria: "principal", nombre: "mouse", coste: 40000 },
    { categoria: "principal", nombre: "teclado", coste: 70000 },
    { categoria: "secundario", nombre: "parlantes", coste: 25000 },
    { categoria: "secundario", nombre: "stream deck", coste: 300000 },
    { categoria: "secundario", nombre: "aro de luz con tripode", coste: 8000 },
    { categoria: "secundario", nombre: "brazo para micrófono", coste: 6000 },
    { categoria: "secundario", nombre: "silla gamer", coste: 110000 },
];

let busqueda;
let filtrar = "";

if (test === "productos") {
    busqueda = prompt("Ingresá una de las siguientes opciones: \n- Categoria \n- Nombre \n- Coste").toLowerCase();
} while (busqueda !== "categoria" && busqueda !== "nombre" && busqueda !== "coste");

switch (busqueda) {
    case "categoria":
        let itemCategoria = prompt("Ingresá una de las siguientes categorías: \n- Principal \n- Secundario").toLowerCase();
        while (!["principal", "secundario"].includes(itemCategoria)) {
            itemCategoria = prompt("Ingresá una categoría válida entre las siguientes: \n- Principal \n- Secundario").toLowerCase();
        }
        filtrar = item.filter(item => item.categoria === itemCategoria);
        while (filtrar.length === 0) {
            itemCategoria = prompt("Ninguna categoría coincide con la ingresada. Ingresá una categoría válida de las siguientes: \n- Principal \n- Secundario").toLowerCase();
            filtrar = item.filter(item => item.categoria === itemCategoria);
        }
        break;

    case "nombre":
        let itemNombre = prompt("Ingrese el nombre del producto: \n- Computadora gamer \n- Micrófono \n- Cámara \n- Auriculares \n- Mouse \n- Teclado \n- Parlantes \n- Stream deck \n- Aro de luz con tripode \n- Brazo para micrófono \n- Silla gamer").toLowerCase();
        while (!["computadora gamer", "micrófono", "cámara", "auriculares", "mouse", "teclado", "parlantes", "stream deck", "aro de luz con tripode", "brazo para micrófono", "silla gamer"].includes(itemNombre)) {
            itemNombre = prompt("Ingrese un nombre válido de producto: \n- Computadora gamer \n- Micrófono \n- Cámara \n- Auriculares \n- Mouse \n- Teclado \n- Parlantes \n- Stream deck \n- Aro de luz con tripode \n- Brazo para micrófono \n- Silla gamer").toLowerCase();
        }
        filtrar = item.filter(item => item.nombre === itemNombre);
        while (filtrar.length === 0) {
            itemNombre = prompt("Ningún producto hallado con el nombre ingresado. Ingrese un nombre válido: \n- Monitor \n- Keyboard \n- Mouse \n- Windows11 \n- Excel \n- Adobe pack \n- Notebook \n- Netbook").toLowerCase();
            filtrar = item.filter(item => item.nombre === itemNombre);
        }
        break;

    case "coste":
        let itemPrice = Number(prompt("Ingrese el valor de su presupuesto"));
        while (isNaN(itemPrice) || itemPrice < 0) {
            itemPrice = Number(prompt("Ingrese un presupuesto mayor a 0"));
        }
        filtrar = item.filter(item => item.coste <= itemPrice);
        while (filtrar.length === 0) {
            itemPrice = Number(prompt("No hay productos que entren en su presupuesto, por favor ingresá un presupuesto mayor a $6000"));
            filtrar = item.filter(item => item.coste <= itemPrice);
        }
        break;

    default:
        alert("Ingresá una de las siguientes opciones: \n- Categoria \n- Nombre \n- Coste").toLowerCase();
        while (busqueda !== "categoria" && busqueda !== "nombre" && busqueda !== "coste") {
            busqueda = prompt("Ingresá una de las siguientes opciones: \n- Categoria \n- Nombre \n- Coste").toLowerCase();
        }
        break;
}

if (filtrar.length > 0) {
    filtrar.forEach((item) => {
        alert(`
      categoria: ${item.categoria}
      nombre: ${item.nombre}
      coste: $${item.coste}
      `);
    });
}


