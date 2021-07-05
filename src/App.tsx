import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { Sobre } from './components/Sobre';
import { Servicos } from './components/Servicos';
import { Depoimentos } from './components/Depoimentos';
import { Contato } from './components/Contato';
import { GlobalStyle } from './components/Global/styles';

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Contato />
      <GlobalStyle />
    </>
  );
}

export default App;
