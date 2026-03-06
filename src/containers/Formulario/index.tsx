import * as S from '../../styles/index'
import { Form, TextDiv } from './styles'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/redurcers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        numero,
        email,
        prioridade: enums.Prioridade.NORMAL
      })
    )
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Titulo>Novo contato</S.Titulo>
      <Form onSubmit={cadastrarContato}>
        <S.Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <TextDiv>
          <S.Campo
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
            as="textarea"
            placeholder="Telefone"
          />
          <S.Campo
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            as="textarea"
            placeholder="Email"
          />
        </TextDiv>
        <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
      </Form>
    </S.MainContainer>
  )
}

export default Formulario
