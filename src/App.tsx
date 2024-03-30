import { ThemeProvider } from 'styled-components'
import temaPadrao from './themes/padrao'
import Cabecalho from './containers/Cabecalho'
import Hero from './containers/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
