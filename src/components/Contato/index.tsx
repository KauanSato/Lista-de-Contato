import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import {
  remover,
  editar,
  favoritar,
  bloquear
} from '../../store/redurcers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  numero: numeroOriginal,
  email: emailOriginal,
  prioridade,
  nome,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [isDisableTarget, setIsDisableTarget] = useState(false)
  const [targetChecked, setTargetChecked] = useState(false)

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [numeroOriginal, emailOriginal])

  function cancelarEdit() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }

  function favoritarContato(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(
      favoritar({
        id,
        fav: evento.target.checked
      })
    )
  }

  function bloquearContato(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(
      bloquear({
        id,
        block: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <S.Nome>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </S.Nome>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.InfoDiv>
        <S.Informacoes
          disabled={!estaEditando}
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
        >
          (19)99999-9999
        </S.Informacoes>
        <S.Informacoes
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        >
          kauan@gmail.com
        </S.Informacoes>
      </S.InfoDiv>
      <input
        type="checkbox"
        checked={isDisableTarget}
        onChange={(e) => {
          favoritarContato(e)
          setIsDisableTarget(e.target.checked)
        }}
        disabled={targetChecked}
      />
      <label>Favoritar</label>
      <input
        type="checkbox"
        checked={targetChecked}
        onChange={(e) => {
          bloquearContato(e)
          setTargetChecked(e.target.checked)
        }}
        disabled={isDisableTarget}
      />
      <label>Bloquear</label>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    numero,
                    email,
                    prioridade,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdit}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
