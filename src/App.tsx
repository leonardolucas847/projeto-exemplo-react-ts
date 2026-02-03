import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'

function App() {
  const [usandoTemaDark, setTemaDark] = useState(false)

  const alternarTema = () => {
    setTemaDark(!usandoTemaDark)
  }
  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar alternarTema={alternarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App
