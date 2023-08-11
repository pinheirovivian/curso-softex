function startElection() {
    const candidates = {
        candidato_X: 0,
        candidato_Y: 0,
        candidato_Z: 0,
        branco: 0,
        nulo: 0
    };

    while (true) {
        const voteInput = prompt("Digite o número do candidato para votar (ou 'branco' para voto em branco), ou 'sair' para encerrar a votação:");

        if (voteInput === "sair") {
            break;
        }

        if (isNaN(voteInput)) {
            alert("Por favor, digite um número válido para votar ou 'branco' para voto em branco.");
            continue;
        }

        const vote = parseInt(voteInput);

        if (vote === 1) {
            candidates.candidato_X++;
        } else if (vote === 2) {
            candidates.candidato_Y++;
        } else if (vote === 3) {
            candidates.candidato_Z++;
        } else if (vote === 0) {
            candidates.branco++;
        } else {
            candidates.nulo++;
        }
    }

    const winner = Object.keys(candidates).reduce((a, b) => candidates[a] > candidates[b] ? a : b);

    console.log("Resultado da eleição:");
    console.log(`Votos para candidato_X: ${candidates.candidato_X}`);
    console.log(`Votos para candidato_Y: ${candidates.candidato_Y}`);
    console.log(`Votos para candidato_Z: ${candidates.candidato_Z}`);
    console.log(`Votos em branco: ${candidates.branco}`);
    console.log(`Votos nulos: ${candidates.nulo}`);
    console.log(`Vencedor: ${winner}`);
}

startElection();
