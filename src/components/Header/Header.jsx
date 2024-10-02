import { StyledHeader, StyledUnorderedList,StyledListItem } from './StyledHeader';
import logo from '../../assets/imagens/compesa-logo.png';

function Header() {
return (
    <StyledHeader>
        <StyledUnorderedList>
            <StyledListItem><img src={logo} alt="Logo" /></StyledListItem>
            <StyledListItem>Institucional</StyledListItem>
            <StyledListItem>Notícias</StyledListItem>
            <StyledListItem>Saneamento</StyledListItem>
            <StyledListItem>Transparência</StyledListItem>
            <StyledListItem>Suprimentos</StyledListItem>
            <StyledListItem>Engenharia</StyledListItem>
            <StyledListItem>Contato</StyledListItem>
        </StyledUnorderedList>
    </StyledHeader>
);
}

export default Header;