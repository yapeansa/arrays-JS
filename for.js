const numeros = [100, 200, 300, 400, 500, 600]

console.log('Primeira forma.')

for (let i = 0; i < numeros.length; i ++)
    console.log(`Índice: ${i}. Número: ${numeros[i]}`)

console.log('Segunda forma.')

numeros.forEach((numero) => console.log(`Índice: ${numeros.indexOf(numero)}. Número: ${numero}`))
