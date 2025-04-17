import { useState, useEffect } from "react";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import "./Carrosel.css";

function Carrosel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [Img2, Img3, Img4]; // Array de imagens
  const totalSlides = slides.length;

  // Função para mover os slides
  const moveSlide = (step) => {
    let newIndex = currentIndex + step;
    if (newIndex >= totalSlides) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }
    setCurrentIndex(newIndex);
  };

  // Atualiza o slide automaticamente a cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlide(1);
    }, 5000);

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex]); // Dependência no currentIndex para reiniciar o intervalo

  return (
    <section className="carousel">
      <section className="slides" style={{ transform: `translateX(-${100 * currentIndex}%) `}}>
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Imagem ${index + 1}`} />
        ))}
      </section>
      
      <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
      <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
     
    </section>
  );
}

export default Carrosel;