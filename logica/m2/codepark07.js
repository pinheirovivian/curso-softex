function calculateAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
}

function getUserInput(promptText) {
    return prompt(promptText);
}

function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    return !isNaN(year) && year >= 1922 && year <= currentYear;
}

function main() {
    let fullName = getUserInput("Digite seu nome completo:");
    let yearOfBirth;

    while (true) {
        const yearInput = getUserInput("Digite seu ano de nascimento (entre 1922 e 2021):");

        if (isValidYear(yearInput)) {
            yearOfBirth = parseInt(yearInput);
            break;
        } else {
            alert("Ano de nascimento inválido. Por favor, digite um ano entre 1922 e 2021.");
        }
    }

    const age = calculateAge(yearOfBirth);
    console.log(`Nome: ${fullName}`);
    console.log(`Idade: ${age}`);
}

main();
