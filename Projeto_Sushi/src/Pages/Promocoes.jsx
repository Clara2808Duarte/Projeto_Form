import NavBar from '../Components/NavBar'
import React, { useEffect, useState } from 'react';
import './Promocoes.css';
import Barca from '../assets/Barca_Img.png'
import Temaki from '../assets/Tekmaki_Img.png'
import Combo from '../assets/Combo_Img.png'
import ComboP from '../assets/ComboPremium_Img.png'
import Footer from '../Components/Footer'


const promoData = [
  {
    id: 1,
    title: 'Combo Clássico',
    description: '10 sashimis, 8 uramakis, 1 temaki de salmão',
    price: 'R$ 59,90',
    image: [
        Combo
    ]
  },
  {
    id: 2,
    title: 'Temaki Lovers',
    description: '3 temakis à sua escolha',
    price: 'R$ 39,90',
    image: [
        Temaki
    ]
  },
  {
    id: 3,
    title: 'Combo Premium',
    description: '20 peças variadas + 2 temakis + 2 refrigerantes',
    price: 'R$ 89,90',
    image: [
        ComboP
    ]
  },
  {
    id: 4,
    title: 'Barca Irresistível',
    description: '80 peças variadas',
    price: 'R$ 137,50',
    image: [
        Barca
    ]
  }
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
         <NavBar />
      <h1>🍣 PROMOÇÕES ESPECIAIS</h1>
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
            <button className="botao"> Clique Aqui </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default PromoSushi