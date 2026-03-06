import BotaoAdd from '../../components/BotaoAdd'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeContatos />
    <BotaoAdd />
  </>
)

export default Home
