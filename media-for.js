const notas = [10, 6.5, 8, 7.5, 9, 5]

let soma = 0

// Primeira forma

// for (let i = 0; i < notas.length; i++)
//     soma += notas[i]

// Segunda forma

// for (let numero of notas)
//     soma += numero

// Terceira forma

for (let indice in notas)
    soma += notas[indice]

const media = soma / notas.length

console.log(`Media: ${media}`)
