import estudo from '../../assets/estudo.jpeg';
import { Container, Content1, Content1eIMG } from './styles';

export function Sobre() {
  return (
    <Container>
      <h1 id="sobre">Sobre mim</h1>

      <Content1eIMG>
        <img src={estudo} alt="Study"></img>

        <Content1>
          <h2>Especialidade</h2>
          <p>
            t quia amet quam dolorem illo atque doloribus debitis, odio
            perspiciatis suscipit laborum odit consequuntur.
          </p>
          <p>
            {' '}
            <strong>Nome:</strong> Angelo Andrade
          </p>
          <p>
            {' '}
            <strong>Formação:</strong> Ciencias da Computação
          </p>
          <p>
            {' '}
            <strong>Data de nascimento:</strong> 24 de outubro de 1994
          </p>
          <p>
            {' '}
            <strong>Telefone:</strong> (87) 98843-0174
          </p>
          <p>
            {' '}
            <strong>Email:</strong> angeloandradeb@hotmail.com
          </p>
        </Content1>
      </Content1eIMG>
    </Container>
  );
}
