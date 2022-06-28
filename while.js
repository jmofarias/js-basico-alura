const listaDeDestinos = new Array(
    `Arapiraca`,
    `Maceió`,
    `Recife`
)

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = false;

const destino = "Maceió"

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;

while(contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe!");
        break;
    } else {
        console.log("Destino não existe!");
    }
    contador += 1;
}

console.log(listaDeDestinos)