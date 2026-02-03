import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  alternarTema: () => void
}

const Sidebar = (props: Props) => (
  <>
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Leonardo Lucas</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          leonardolcuas847
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro de Software
        </Descricao>
        <BotaoTema onClick={props.alternarTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  </>
)

export default Sidebar
