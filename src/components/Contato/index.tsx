import { Container } from './styles';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export function Contato() {
  return (
    <Container>
      <h1 id="contato">Contato</h1>
      <div className="angelo1">
        <MdEmail />
        <strong>Email</strong>
        <p>angeloandradeb@hotmail.com</p>
      </div>
      <div className="angelo2">
        <AiFillPhone />
        <strong>Telefone</strong>
        <p>87988430174</p>
      </div>
    </Container>
  );
}
