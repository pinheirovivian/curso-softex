const animais = [
    ["Leão", "Felino", 8],
    ["Elefante", "Mamífero", 15],
    ["Girafa", "Herbívoro", 10],
    ["Tigre", "Felino", 6],
    ["Cavalo", "Mamífero", 12]
];

console.log("Informações sobre os animais:");
for (let i = 0; i < animais.length; i++) {
    const animal = animais[i];
    console.log(`Animal: ${animal[0]}, Espécie: ${animal[1]}, Idade: ${animal[2]} anos`);
}
