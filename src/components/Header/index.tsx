import { Container, Content } from './styles';
import { GoThreeBars } from 'react-icons/go';
import { useState } from 'react';

export function Header() {
  const [click, setClick] = useState(true);

  return (
    <Container>
      <h2>Ângelo Andrade</h2>

      {click && (
        <ul>
          <li>
            <a href="#inicio">ínicio</a>
          </li>

          <li>
            <a href="#sobre">Sobre</a>
          </li>

          <li>
            <a href="#servicos">Serviços</a>
          </li>

          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>

          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      )}
      <Content>
        <GoThreeBars
          onClick={() => {
            setClick(!click);
          }}
        />
      </Content>
    </Container>
  );
}
