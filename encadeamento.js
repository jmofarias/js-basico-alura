const listaDeDestinos = new Array(
    `Arapiraca`,
    `Maceió`,
    `Recife`
)

const idadeComprador = 18;
const estaAcompanhada = true;


if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item
} else if (estaAcompanhada) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log(listaDeDestinos)