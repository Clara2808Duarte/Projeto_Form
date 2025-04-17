import NavBar from '../Components/NavBar'
import React, { useEffect, useState } from 'react';
import './Promocoes.css';


<NavBar />
const promoData = [
  {
    id: 1,
    title: 'Combo Clássico',
    description: '10 sashimis, 8 uramakis, 1 temaki de salmão',
    price: 'R$ 59,90',
    image: '/images/combo-classico.jpg',
  },
  {
    id: 2,
    title: 'Temaki Lovers',
    description: '3 temakis à sua escolha',
    price: 'R$ 39,90',
    image: '/images/temaki-lovers.jpg',
  },
  {
    id: 3,
    title: 'Combo Premium',
    description: '20 peças variadas + 2 temakis + 2 refrigerantes',
    price: 'R$ 89,90',
    image: '/images/combo-premium.jpg',
  },
];

function PromoSushi() {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    // Simula carregamento de dados (como se fosse de uma API)
    setTimeout(() => {
      setCombos(promoData);
    }, 500);
  }, []);

  return (
    <div className="promo-container">
      <h1>🍣 Promoções Especiais</h1>
      <p className="sub">Combos irresistíveis de sushi e temaki pra você!</p>

      <div className="promo-grid">
        {combos.map(combo => (
          <div key={combo.id} className="promo-card">
            <div className="image-wrapper">
              <img src={combo.image} alt={combo.title} />
            </div>
            <h2>{combo.title}</h2>
            <p>{combo.description}</p>
            <span className="price">{combo.price}</span>
            <button>Quero esse! 🍱</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PromoSushi