import { Card, Linkbotao } from './styles'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

// se for escrever o estilo junto ao componente, estiliza-lo antes do componente

const Projeto = () => (
  <Card>
    <Titulo>Título do Projeto</Titulo>
    <Paragrafo tipo="secundario">
      Este projeto tem como objetivo principal facilitar a organização e o
      gerenciamento de tarefas diárias, oferecendo uma interface intuitiva e
      funcionalidades avançadas para melhorar a produtividade dos usuários.
    </Paragrafo>
    <Linkbotao href="#">Acessar Projeto</Linkbotao>
  </Card>
)

export default Projeto
