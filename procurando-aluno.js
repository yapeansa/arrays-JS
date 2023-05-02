const alunos = ['João', 'Juliana', 'Ana', 'Caio']
const media = [10, 8, 7.5, 9]

const listaDeAlunosEMedias = [alunos, media]

function exibeNomeENota (aluno) {
    // const alunos = listaDeAlunosEMedias[0]
    // const medias = listaDeAlunosEMedias[1]
    const [alunos, medias] = listaDeAlunosEMedias
    const indiceDeAluno = alunos.indexOf(aluno)
    const mediaDeAluno = medias[indiceDeAluno]
    const mensagem = alunos.includes(aluno) ? `A média de ${aluno} é: ${mediaDeAluno}` : `${aluno} não foi encontrado.`
    return mensagem
}

console.log(exibeNomeENota('Ana'))
