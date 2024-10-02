import { CarouselContainer, Slides, Slide, ManualNavigation } from './StyledCarousel';
import { useState, useEffect } from 'react';
import carrossel1 from '../../assets/imagens/carrossel-1.jpg';
import carrossel2 from '../../assets/imagens/carrossel2.jpg';
import carrossel3 from '../../assets/imagens/carrossel3.jpg';
import carrossel4 from '../../assets/imagens/carrossel4.jpg';
import carrossel5 from '../../assets/imagens/carrossel5.jpg';
import carrossel6 from '../../assets/imagens/carrossel6.jpg';
import carrossel7 from '../../assets/imagens/carrossel7.png';



const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 7);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <CarouselContainer>
        <Slides currentSlide={currentSlide}>
          <Slide>
            
            <img src={carrossel1}  />
          </Slide>
          <Slide>
            
            <img src={carrossel2} />
          </Slide>
          <Slide>
            
            <img src={carrossel3} />
          </Slide>
          <Slide>
            
            <img src={carrossel4}  />
          </Slide>
          <Slide>
           
            <img src={carrossel5} />
          </Slide>
          <Slide>
           
            <img src={carrossel6} />
          </Slide>
          <Slide>
            
            <img src={carrossel7} />
          </Slide>
        </Slides>
  
        <ManualNavigation>
          {[...Array(7)].map((_, index) => (
            <label
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{ backgroundColor: currentSlide === index ? 'white' : 'transparent' }}
              className="manual-btn"
            ></label>
          ))}
        </ManualNavigation>
      </CarouselContainer>
    );
  };
  

export default Carousel;