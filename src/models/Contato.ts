import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  numero: string
  email: string
  prioridade: enums.Prioridade
  id: number

  constructor(
    nome: string,
    numero: string,
    email: string,
    prioridade: enums.Prioridade,
    id: number
  ) {
    this.nome = nome
    this.numero = numero
    this.email = email
    this.prioridade = prioridade
    this.id = id
  }
}

export default Contato
