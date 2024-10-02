import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #0073e6;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d6cece;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ServiceName = styled.span`
  font-size: 16px;
  color: #333;
  text-align: center;
`;

export { Container, Title, ServiceGrid, ServiceItem, Icon, ServiceName };