const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(carta){
    let palabras = letter.split(/\s+/).filter(regalo => regalo.trim() !== '' && !regalo.startsWith('_'));

    const regalos = palabras.reduce((contadorRegalos, regalo) => {
        contadorRegalos[regalo] = (contadorRegalos[regalo] || 0) + 1;
        return contadorRegalos;
    }, {});
    
    return regalos;
}

const regalos = listGifts(carta)
console.log(regalos);