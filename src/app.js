/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let inicio = "Un/a ";
  let sujeto = [
    "octogenario ",
    "perro de 6 patas ",
    "cocodrilo vegetariano ",
    "señora malhumorada ",
    "alienígena pacifista ",
    "gato malhumorado "
  ];
  let verbo = [
    "se comió ",
    "maltrató psicológicamente a ",
    "pateó a ",
    "jugó al escondite con ",
    "miró mal a "
  ];
  let objeto = [
    "mis zapatillas ",
    "unos residuos nucleares ",
    "mi mochila de Peppa Pig ",
    "una papelera ",
    "la Sagrada Familia "
  ];
  let lugar = [
    "en la esquina de mi casa.",
    "en el muelle de San Blas.",
    "al pasar la barca.",
    "entre Kyoto y Osaka.",
    "en la Isla de Pascua."
  ];

  let variable1 = Math.floor(Math.random() * sujeto.length);
  let variable2 = Math.floor(Math.random() * verbo.length);
  let variable3 = Math.floor(Math.random() * objeto.length);
  let variable4 = Math.floor(Math.random() * lugar.length);

  document.querySelector("#excusa").innerHTML =
    inicio +
    sujeto[variable1] +
    verbo[variable2] +
    objeto[variable3] +
    lugar[variable4];
};
