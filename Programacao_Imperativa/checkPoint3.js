class Matricula {
  constructor(nome, quantidadeFaltas, notas) {
    this.nome = nome
    this.quantidadeFaltas = quantidadeFaltas
    this.notas = notas
  }
  calcularMedia() {
    let media = this.notas.reduce((nota, i) => {
      return nota + i
    })
    return media / this.notas.length
  }
  faltas() {
    return (this.quantidadeFaltas += 1)
  }
}

let curso = {
  nomeCurso: 'Administração',
  notaAprovacao: 7,
  faltaMaxima: 3,
  listaEstudantes: [],
  arrayResultado: [],
  resultadoFinal(listaEstudantes) {
    let notaOriginal = this.notaAprovacao
    this.listaEstudantes.forEach(aluno => {
      let quantFalta = aluno.quantidadeFaltas
      if (quantFalta == this.faltaMaxima) {
        this.notaAprovacao =
          this.notaAprovacao + (this.notaAprovacao / 100) * 10
      }
      let somaNotas = aluno.notas.reduce((n, i) => {
        return n + i
      })
      let mediaFinal = somaNotas / aluno.notas.length
      if (mediaFinal >= this.notaAprovacao) {
        this.arrayResultado.push(true)
      } else {
        this.arrayResultado.push(false)
      }
      this.notaAprovacao = notaOriginal
    })
  }
}

let aluno = new Matricula('Renan', 3, [8, 8, 8, 7])
curso.listaEstudantes.push(aluno)
aluno = new Matricula('Marta', 2, [5, 7, 5, 6])
curso.listaEstudantes.push(aluno)
aluno = new Matricula('Allyssa', 2, [10, 8, 8, 7])
curso.listaEstudantes.push(aluno)
aluno = new Matricula('Aidan', 3, [9, 7, 7, 9])
curso.listaEstudantes.push(aluno)
curso.resultadoFinal()
console.log(curso.arrayResultado)
