import Angelo2 from '../../assets/Angelo2.jpeg';

import { Container, Content } from './styles';

export function Inicio() {
  return (
    <Container id="inicio">
      <Content>
        <h2>Ângelo Andrade</h2>
        <p>Show</p>
      </Content>

      <img src={Angelo2} />
    </Container>
  );
}
