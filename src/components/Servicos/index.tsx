import { Container, Content } from './styles';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

export function Servicos() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <h1 id="servicos">Serviços</h1>

      <Content data-aos="slide-up" data-aos-delay="5000">
        <img src="https://servicos.detran.ba.gov.br/Content/img/home/ico_2aViaCNH.png" />
        <strong>Emplacamento</strong>
        <p>
          O emplacamento é uma espécie de registro do veículo junto aos órgãos
          responsáveis pela fiscalização de trânsito
        </p>
      </Content>

      <Content data-aos="slide-up" data-aos-delay="5000">
        <img src="https://servicos.detran.ba.gov.br/Content/img/home/ico_2aViaCNH.png" />
        <strong>2 via CRV</strong>
        <p>
          O Certificado de Registro do Veículo é vinculado ao conceito de
          documento de carro
        </p>
      </Content>

      <Content data-aos="slide-up" data-aos-delay="5000">
        <img src="https://servicos.detran.ba.gov.br/Content/img/home/ico_2aViaCNH.png" />
        <strong>Transferência de estado</strong>
        <p>
          Processo de inclusão dos dados cadastrais de um veículo, com ou sem
          transferência de propriedade para outro estado
        </p>
      </Content>

      <Content data-aos="slide-up" data-aos-delay="5000">
        <img src="https://servicos.detran.ba.gov.br/Content/img/home/ico_2aViaCNH.png" />
        <strong>Transferência de município</strong>
        <p>
          Processo de inclusão dos dados cadastrais de um veículo, com ou sem
          transferência de propriedade para outro município
        </p>
      </Content>

      <Content data-aos="slide-up" data-aos-delay="5000">
        <img src="https://servicos.detran.ba.gov.br/Content/img/home/ico_2aViaCNH.png" />
        <strong>Baixa de gravame</strong>
        <p>
          Quando o financiado terminar de pagar o valor do financiamento do
          veículo, deverá ser feita a baixa do gravame
        </p>
      </Content>

      <Content data-aos="slide-up" data-aos-delay="5000">
        <img src="https://servicos.detran.ba.gov.br/Content/img/home/ico_2aViaCNH.png" />
        <strong>Inclusão de gravame</strong>
        <p>
          Veículos adquiridos através de financiamento, estão sujeitos a
          inclusão do Gravame no órgão de trânsito indicado{' '}
        </p>
      </Content>

      <Content data-aos="slide-up" data-aos-delay="5000">
        <img src="https://servicos.detran.ba.gov.br/Content/img/home/ico_2aViaCNH.png" />
        <strong>Autorização de inmetro</strong>
        <p>
          Para documentar qualquer mudança de características diferente das
          originais em um veículo ou em caso de conserto após acidente de
          trânsito
        </p>
      </Content>

      <Content data-aos="slide-up" data-aos-delay="5000">
        <img src="https://servicos.detran.ba.gov.br/Content/img/home/ico_2aViaCNH.png" />
        <strong>Alterações diversas</strong>
        <p>
          Qualquer alteração nas características originais do veículo deve ser
          comunicada e aprovada pelo Departamento Estadual de Trânsito
        </p>
      </Content>
    </Container>
  );
}
