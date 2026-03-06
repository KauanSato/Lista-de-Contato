import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/redurcers/filtro'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispacth = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispacth(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard criterio="todas" legenda="Todas" />
              <FiltroCard
                valor={enums.Prioridade.FAVORITOS}
                criterio="prioridade"
                legenda="Favoritos"
              />
              <FiltroCard
                valor={enums.Prioridade.BLOQUEADO}
                criterio="prioridade"
                legenda="Bloqueados"
              />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
