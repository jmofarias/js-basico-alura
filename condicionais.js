const listaDeDestinos = new Array(
    `Arapiraca`,
    `Maceió`,
    `Recife`
)

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = false;

// operador OU 
if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Compra bem sucedida!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque:");

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!")
} else {
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos)