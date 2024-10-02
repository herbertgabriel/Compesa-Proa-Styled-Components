import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

const Slides = styled.div`
  width: 500%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 20}%)`};
`;

const Slide = styled.div`
  width: 20%;
  position: relative;
  flex-shrink: 0;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ManualNavigation = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 10px;

  label {
    border: 2px solid white;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    margin: 0 5px;
  }
`;
export { CarouselContainer, Slides, Slide, ManualNavigation };