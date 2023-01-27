// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function simepreTrue() {
  return true;
}
console.log(simepreTrue());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const asincrona = setTimeout(() => {
  console.log("¡Hola soy una promesa!");
}, 5000);

console.log(asincrona);

// - Una función generadora de índices pares automáticos

function* generarIndice() {
  let indice = 0;
  while (true) {
    indice += 2;
    if (indice === 20) {
      return indice;
    }
    yield indice;
  }
}

const genIndice = generarIndice();
console.log(genIndice.next().value);
console.log(genIndice.next().value);
console.log(genIndice.next().value);
