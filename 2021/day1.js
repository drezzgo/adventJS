/*Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

const ovejass = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)
[{ name: 'Navidad', color: 'rojo' },
{ name: 'Ki Na Ma', color: 'rojo' }]*/

//Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.


const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]
let prueba = []

// function contarOvejas(ovejas){
//     let resultado = []
//     for(let i=0; i<ovejas.length; i++){
//         console.log(`El objeto ${i + 1} | ${ovejas[i].name} : ${ovejas[i].name.includes('a') && ovejas[i].name.includes('N')}`)
//         if (ovejas[i].name.includes('a') && ovejas[i].name.includes('N') && ovejas[i].color == 'rojo'){
//             resultado.push(ovejas[i])
//         }
//     }
//     return resultado
// }

function contarOvejas(ovejas){
    return ovejas.filter(oveja =>{
        const name = oveja.name.toLowerCase().replace('/\s/g', '');
        return oveja.color == 'rojo' && oveja.name.includes('a') && name.includes('n');
    });
}

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)