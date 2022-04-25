const listaLivros = require('./array');

function mergeSort(array, nivelAninhamento = 0) {

    console.log(`Nível de animnhamento: ${nivelAninhamento}`);
    console.log(array);

    if (array.length > 1) {
        // Math.floor: arredonda o numero para baixo
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++);
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
        array = ordena(parte1, parte2);
    }

    return array;
}

function ordena(parte1, parte2) {
    let posicaoParte1 = 0;
    let posicaoParte2 = 0;
    const resultado = [];

    while (posicaoParte1 < parte1.length && posicaoParte2 < parte2.length) {
        let produtoParte1 = parte1[posicaoParte1];
        let produtoParte2 = parte2[posicaoParte2];

        if (produtoParte1.preco < produtoParte2.preco) {
            resultado.push(produtoParte1);
            posicaoParte1++;
        } else {
            resultado.push(produtoParte2);
            posicaoParte2++;
        }
    }

    return resultado.concat(
        posicaoParte1 < parte1.length 
        ? parte1.slice(posicaoParte1) 
        : parte2.slice(posicaoParte2)
    );
}

console.log(mergeSort(listaLivros));