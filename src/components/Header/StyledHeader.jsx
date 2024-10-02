import styled from 'styled-components';
const StyledHeader = styled.header`
  background-color: #d8eddd;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px;
`;
const StyledUnorderedList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 1300px;
    margin: 0 auto;
`;
const StyledListItem = styled.li`
    list-style-type: none;
    font-size: 1.5rem;
    color: #0505c5;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #00bb19;
    }
`;
export { StyledHeader, StyledUnorderedList, StyledListItem };