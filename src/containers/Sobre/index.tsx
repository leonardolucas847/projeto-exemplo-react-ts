import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre </Titulo>

    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt
      accusantium neque facilis accusamus, aliquam aliquid dolore dolor.
      Doloremque possimus iure nisi saepe neque. Ratione optio nam illo neque
      ad.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats-leo1.vercel.app/api?username=leonardolucas847&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats-leo1.vercel.app/api/top-langs/?username=leonardolucas847&layout=compact&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
