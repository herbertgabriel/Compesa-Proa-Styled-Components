import { StyledFooter, StyledUnorderedList,StyledListItem } from './StyledFooter';

function Footer() {
return (
    <StyledFooter>
        <StyledUnorderedList>
            <StyledListItem>Institucional</StyledListItem>
            <StyledListItem>Notícias</StyledListItem>
            <StyledListItem>Saneamento</StyledListItem>
            <StyledListItem>Transparência</StyledListItem>
            <StyledListItem>Suprimentos</StyledListItem>
            <StyledListItem>Engenharia</StyledListItem>
            <StyledListItem>Contato</StyledListItem>
        </StyledUnorderedList>
    </StyledFooter>
);
}

export default Footer;