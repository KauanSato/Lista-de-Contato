import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
}

function retornaCorDeFundo(props: TagProps): string {
  if ('prioridade' in props) {
    if (props.prioridade === enums.Prioridade.FAVORITOS)
      return variaveis.amarelo
    if (props.prioridade === enums.Prioridade.BLOQUEADO)
      return variaveis.vermelho
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    align-items: center;
    margin-bottom: 16px;
    margin-left: 10px;
    font-size: 20px;
  }
  input {
    margin-left: 16px;
    margin-bottom: 16px;
    width: 20px;
    height: 15px;
    border: none;
  }
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const InfoDiv = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
`

export const Informacoes = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  height: 31px;
  display: block;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
