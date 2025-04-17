import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';

const adicionaisData = [
  {
    id: 1,
    title: 'Joy de Salmão',
    description: 'Base de arroz envolta em salmão com cobertura de cream cheese e cebolinha.',
    price: 'R$ 8,90',
    image: '/images/joy.jpg',
  },
  {
    id: 2,
    title: 'Edamame',
    description: 'Soja verde cozida e levemente salgada, perfeita como entrada.',
    price: 'R$ 10,90',
    image: '/images/edamame.jpg',
  },
  {
    id: 3,
    title: 'Sunomono',
    description: 'Refrescante salada agridoce de pepino com gergelim.',
    price: 'R$ 9,90',
    image: '/images/sunomono.jpg',
  },
  {
    id: 4,
    title: 'Missoshiru',
    description: 'Sopa de missô com tofu, cebolinha e algas.',
    price: 'R$ 7,90',
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
    <div className="promo-container">
      <NavBar />
      <h1>Itens Adicionais</h1>
      <p className="sub">Complementos que tornam sua experiência ainda mais completa!</p>

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
  );
}

export default ItensAdicionais;
