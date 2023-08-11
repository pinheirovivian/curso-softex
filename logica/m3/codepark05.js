const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const target = 20;
let found = false;
let index = -1;

for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
        found = true;
        index = i;
        break;
    }
}

if (found) {
    console.log(`O número ${target} foi encontrado no índice ${index}.`);
} else {
    console.log(`O número ${target} não foi encontrado no array.`);
}
