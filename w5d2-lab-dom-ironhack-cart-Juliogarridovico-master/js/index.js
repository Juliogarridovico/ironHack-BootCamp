// ITERATION 1

function updateSubtotal(product) {
  console.log('teacher i  am guachin llu!');

  // para conseguir los valores
  const cantidad = product.querySelector('.quantity input');
  const precio = product.querySelector('.price span');

  // saco valores y los paso a numeros para asegurar que no es texto
  const precioProducto = parseFloat(precio.innerText);
  const cantiadProductos = cantidad.valueAsNumber;

  // Calcular el total de los diferentes productos
  const valorTotal = precioProducto * cantiadProductos;

  const Totaldeltotal = product.querySelector('.subtotal span');

  Totaldeltotal.innerText = valorTotal;

  // Return subtotal value so it can be used later
  // hago el console por un tema de inseguridad
  console.log(valorTotal);
  return valorTotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here

  // pillo en una pedazo de array todos los product del sitio web
  const productos = document.getElementsByClassName('product');

  // aqui llega la magia, itero la pedazo de array para que busque en cada posicion de esta y uso una variable muy larga para almacenar el valor total. dentro de la iteracion uso updateSubtotal para que sume pero creo que no habria hecho falta pero queda molon esto de ir reciclando codigo
  let valorTotalPeroEstaVezDeVerdad = 0;

  for (let product of productos) {
    valorTotalPeroEstaVezDeVerdad += updateSubtotal(product);
    //no entiendo porque este no funciona y el otro no
    //updateSubtotal(product) += valorTotalPeroEstaVezDeVerdad ;
  }

  // ITERATION 3
  //... your code goes here
  // lo muuestro
  document.querySelector('#total-value span').innerHTML =
    valorTotalPeroEstaVezDeVerdad;

  console.log(productos);
}

// ITERATION 4

// // ITERATION 5

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
