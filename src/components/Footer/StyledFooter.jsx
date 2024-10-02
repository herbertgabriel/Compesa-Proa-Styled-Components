import styled from 'styled-components';

const StyledFooter = styled.header`
  background-color: #010172;

`;

const StyledUnorderedList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 20px;
    width: 1300px;
    margin: 0 auto;
`;


const StyledListItem = styled.li`
    list-style-type: none;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #00bb19;
    }
`;



export { StyledFooter, StyledUnorderedList, StyledListItem };