import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Joy from '../assets/Joy.png'
import Edamame from '../assets/Edamame.png'
import Sunomono from '../assets/Sunomono.png'
import Missoshiru from '../assets/Missoshiru.png'
import Footer from '../Components/Footer'

const adicionaisData = [
  {
    id: 1,
    title: 'Joy de Salmão',
    description: 'Base de arroz envolta em salmão com cobertura de cream cheese e cebolinha.',
    price: 'R$ 8,90',
    image: [
      Joy
    ]
  },
  {
    id: 2,
    title: 'Edamame',
    description: 'Soja verde cozida e levemente salgada, perfeita como entrada.',
    price: 'R$ 10,90',
    image: [
      Edamame
    ]
  },
  {
    id: 3,
    title: 'Sunomono',
    description: 'Refrescante salada agridoce de pepino com gergelim.',
    price: 'R$ 9,90',
    image: [
      Sunomono
    ]
  },
  {
    id: 4,
    title: 'Missoshiru',
    description: 'Sopa de missô com tofu, cebolinha e algas.',
    price: 'R$ 7,90',
    image: [
      Missoshiru
    ]
  }
];

function ItensAdicionais() {
  const [itens, setItens] = useState([]);

  // O useEffect será executado quando o componente for montado (apenas uma vez)
  useEffect(() => {
    // Simula o carregamento de dados de maneira assíncrona usando 'setTimeout'
    setTimeout(() => {
      // Após 500ms, os dados simulados (combosData) são passados para o estado 'combos'
      setItens(adicionaisData);
    }, 500);  // Delay de 500ms
  }, []); // O array vazio indica que esse efeito será executado apenas uma vez, na primeira renderização

  return (
    <>
    <div className="promo-container">
      <NavBar />
      <h1>ITENS ADICIONAIS</h1>
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
    <Footer/>
    </>
  );
}

export default ItensAdicionais;
