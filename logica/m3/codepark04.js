class Node {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    adicionarPessoa(nome, idade) {
        const novaPessoa = new Node(nome, idade);

        if (!this.cabeca) {
            this.cabeca = novaPessoa;
        } else {
            let atual = this.cabeca;
            while (atual.filho) {
                atual = atual.filho;
            }
            atual.filho = novaPessoa;
        }
    }
}

const lista = new ListaEncadeada();

lista.adicionarPessoa("Alice", 30);
lista.adicionarPessoa("Bob", 25);
lista.adicionarPessoa("Carol", 40);

let atual = lista.cabeca;
while (atual) {
    console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
    atual = atual.filho;
}
