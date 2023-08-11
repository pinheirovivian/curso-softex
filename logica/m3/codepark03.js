// fila 
const array = [3, 7, 9, 1, 0];
const fila = [];

array.forEach(numero => {
    fila.push(numero);
});

const sequenciaFila = [];

while (fila.length > 0) {
    sequenciaFila.push(fila.shift());
}

console.log("Sequência de números removidos da fila:", sequenciaFila);


// lista 
const array = [3, 7, 9, 1, 0];
const lista = [];

array.forEach(numero => {
    lista.push(numero);
});

const sequenciaLista = [];

while (lista.length > 0) {
    sequenciaLista.push(lista.pop());
}

console.log("Sequência de números removidos da lista:", sequenciaLista);


// pilha
const array = [3, 7, 9, 1, 0];
const pilha = [];

array.forEach(numero => {
    pilha.push(numero);
});

const sequenciaPilha = [];

while (pilha.length > 0) {
    sequenciaPilha.push(pilha.pop());
}

console.log("Sequência de números removidos da pilha:", sequenciaPilha);
