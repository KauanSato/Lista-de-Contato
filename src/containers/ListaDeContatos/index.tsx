import Contato from '../../components/Contato'
import { MainContainer, List, Titulo } from '../../styles/index'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContato = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.prioridade === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const resultadoFiltro = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `${termo}` : ''

    if (criterio === 'todas') {
      mensagem = `Resultado Total: " ${quantidade} ${complementacao} "`
    } else {
      mensagem = `Resultado Total: " ${quantidade} ${`${valor}`} ${complementacao} "`
    }
    return mensagem
  }

  const contatos = filtraContato()
  const mensagem = resultadoFiltro(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <List>
        {filtraContato().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              numero={c.numero}
              email={c.email}
              prioridade={c.prioridade}
            />
          </li>
        ))}
      </List>
    </MainContainer>
  )
}

export default ListaDeContatos
