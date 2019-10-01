const lista = [56, 89, 34, 12, 23, 55, 9]

// lista.sort(function(a, b){return a-b})
// console.log(list)

for(let i = 0; i<lista.length; i++) {
    for( let j = 0; j<lista.length; j++) {
        if(lista[j] > lista[j+1]) {
            let aux = lista[j]
            lista[j] = lista[j+1]
            lista[j+1] = aux
        }
    }
}

console.log(lista)