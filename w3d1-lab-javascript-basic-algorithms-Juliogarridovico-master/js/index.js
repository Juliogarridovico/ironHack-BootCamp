for (i = 0; i < 1000; i++) {
  console.log(""); // un pequeño bucle para meter espacios y dar una falsa sensacion de limpiar la pantalla ¬.¬
}
console.log("I'm ready!");
// Iteration 1: Names and Input
//
console.log("");

let hacker1 = "Julio";
let hacker2 = "Radar";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is  " + hacker2);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has" + hacker1 + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    " It seems that the navigator has the longest name, it has" +
      hacker2 +
      " characters"
  );
} else {
  console.log("What?! You both have the same name?");
}
// Iteration 3: Loops

//3-1 separar todas las letras del conductor con un espacio y pasarlo a mayusculas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// con split cojo la variable hacker y la divido en un array para cada digito, con .join meto una separacio entre posiciones del array. Aunque podria ser un guion, una coma o lo que sea.
// console.log(hacker1.split("").join(""))
console.log("");

let resultado = "";
for (i = 0; i < hacker1.length; i++) {
  resultado += hacker1[i].toUpperCase() + " ";
}
console.log(resultado);
//3.2 la variable hacker2 escrita al reves

// console.log(hacker2.split("").reverse().join("")); // solucion sin loops como se ve en la ejecucion del script funciona perfectamente
// console.log(hacker2.length);

let patras=""
for( j=hacker2.length-1;j>=0;--j){
    patras+=hacker2[j];
}
console.log(patras);

// //3.3
console.log(" ")
if(hacker2>hacker1){

    console.log("The navigator goes first definitely: "+hacker1);
}
else if(hacker2===hacker1){
    console.log("What?! You both have the same name?");
}else{
    console.log("the driver\´s name goes first:"+hacker1);
}

