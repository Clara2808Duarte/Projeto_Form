import { useEffect, useState } from 'react';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const adicionaisData = [
  {
    id: 1,
    title: 'Temaki de Salmão Cru',
    description: 'Clássico e irresistível! Feito com salmão fresco, arroz temperado, cream cheese e cebolinha, envolto em alga crocante.',
    price: 'R$ 26,90',
    image: '/images/joy.jpg',
  },
  {
    id: 2,
    title: 'Temaki Frito',
    description: 'Crosta dourada por fora, cremoso por dentro! Salmão empanado com cream cheese, cebolinha e finalizado com molho tarê.',
    price: 'R$ 28,90',
    image: '/images/edamame.jpg',
  },
  {
    id: 3,
    title: 'Temaki de Atum',
    description: 'Sabor marcante e textura suave! Atum fresco com arroz, toque de cebolinha e alga crocante.',
    price: 'R$ 25,90',
    image: '/images/sunomono.jpg',
  },
  {
    id: 4,
    title: 'Temaki Skin',
    description: 'Para quem ama crocância! Pele de salmão grelhada, bem temperada, com arroz, cream cheese e cebolinha.',
    price: 'R$ 24,90',
    image: '/images/missoshiru.jpg',
  }
];

function ItensAdicionais() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    // Simula carregamento de dados
    setTimeout(() => {
      setItens(adicionaisData);
    }, 500);
  }, []);

  return (
    <>
    <div className="promo-container">
      <NavBar />
      <h1>Temakis</h1>
      <p className="sub">Temakis fresquinhos que deixam cada mordida ainda mais especial!</p>

      <div className="promo-grid">
        {itens.map(item => (
          <div key={item.id} className="promo-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ItensAdicionais;