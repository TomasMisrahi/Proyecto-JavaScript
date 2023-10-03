/*Lo que falta hacer: (for)*/

let test = prompt("Si queres saber si sos capaz de ser streamer coloque si");

while (test != "no") {
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
                if (respuesta1.toLowerCase() === "si") {
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
                if (respuesta2.toLowerCase() === "si") {
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
                if (respuesta3.toLowerCase() === "si") {
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
                if (respuesta4.toLowerCase() === "si") {
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
                if (respuesta5.toLowerCase() === "si") {
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
                if (respuesta6.toLowerCase() === "si") {
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
                if (respuesta7.toLowerCase() === "no") {
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
                if (respuesta8.toLowerCase() === "si") {
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
                if (respuesta9.toLowerCase() === "si") {
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
                if (respuesta10.toLowerCase() === "si") {
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
        alert("Segun las respuestas puestas consideramos que no eres capaz de ser streamer 😢. Puntuación final: " + puntuacion + "/10");
    }
    else {
        alert("Sos totalmente apto para ser streamer 😎");
    }

    test = prompt("Si queres hacer el test de vuelta coloque si, de lo contrario coloque no");
}

