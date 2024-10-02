import { Container, Title, ServiceGrid, ServiceItem, Icon, ServiceName } from './StyledMainContent';

import debitoAutomatico from '../../assets/imagens/debito-automatico.png';
import faturaPorEmail from '../../assets/imagens/fatura-por-email.png';
import mudancaTitularidade from '../../assets/imagens/mudanca-de-titularidade.png';
import negociacaoDeDebito from '../../assets/imagens/negociacao-de-debitos.png';
import pagamentoCartaoDeCredito from '../../assets/imagens/pagamento-cartao-de-credito.png';
import novoCliente from '../../assets/imagens/novo-cliente.png';
import segundaViaDeConta from '../../assets/imagens/segunda-via.png';
import religacaoDeAgua from '../../assets/imagens/religacao-de-agua.png';
import reportarVazamento from '../../assets/imagens/reportar-vazamento.png';

const services = [
    { name: "Pagamento Cartão de Crédito", icon: pagamentoCartaoDeCredito },
    { name: "Novo Cliente", icon: novoCliente },
    { name: "Negociação de Débitos", icon: negociacaoDeDebito  },
    { name: "2ª Via de Conta", icon:  segundaViaDeConta },
    { name: "Religação de Água", icon: religacaoDeAgua },
    { name: "Fatura por E-mail", icon: faturaPorEmail },
    { name: "Calendário de Abastecimento", icon: faturaPorEmail},
    { name: "Débito Automático", icon: debitoAutomatico },
    { name: "Reportar Vazamento", icon: reportarVazamento },
    { name: "Mudança de Titularidade", icon: mudancaTitularidade  },
  ];

function MainContent(){
    return (
        <Container>
        <Title>AGÊNCIA VIRTUAL</Title>
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceItem key={index}>
              <Icon><img src={service.icon} alt="" /></Icon>
              <ServiceName>{service.name}</ServiceName>
            </ServiceItem>
          ))}
        </ServiceGrid>
      </Container>
    );
  };

export default MainContent;