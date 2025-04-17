import { useState, useEffect } from "react";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import "./Carrosel.css";

function Carrosel() {
  // Declara um estado para o índice do slide atual, inicializado em 0
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Array de imagens que serão exibidas no carrossel
  const slides = [Img2, Img3, Img4]; 
  // Armazena o total de slides disponíveis
  const totalSlides = slides.length;

  // Função para mover os slides, recebe um parâmetro 'step' que indica a direção
  const moveSlide = (step) => {
    // Calcula o novo índice com base no índice atual e no passo
    let newIndex = currentIndex + step;
    
    // Se o novo índice for maior ou igual ao total de slides, volta para o primeiro slide
    if (newIndex >= totalSlides) {
      newIndex = 0;
    } 
    // Se o novo índice for menor que 0, vai para o último slide
    else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }
    
    // Atualiza o estado com o novo índice
    setCurrentIndex(newIndex);
  };

  // Efeito colateral para atualizar o slide automaticamente a cada 5 segundos
  useEffect(() => {
    // Define um intervalo que chama a função moveSlide a cada 3000 milissegundos (3 segundos)
    const intervalId = setInterval(() => {
      moveSlide(1);
    }, 3000);

    // Retorna uma função de limpeza que limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId); 
  }, [currentIndex]); // Dependência no currentIndex para reiniciar o intervalo quando o índice mudar

  return (
    <section className="carousel">
      {/* Seção que contém os slides, com uma transformação CSS para mover os slides */}
      <section className="slides" style={{ transform: `translateX(-${100 * currentIndex}%) `}}>
        {/* Mapeia cada slide para um elemento de imagem */}
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Imagem ${index + 1}`} />
        ))}
      </section>
      
      {/* Botão para mover para o slide anterior */}
      <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
      {/* Botão para mover para o próximo slide */}
      <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
    </section>
  );
}

export default Carrosel; // Exporta o componente Carrosel para uso em outros arquivos