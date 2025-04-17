import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Mochi from '../assets/Mochi.png'

const sobremesasData = [
  {
    id: 1,
    title: 'Mochi com Sorvete',
    description: 'Tradicional doce japonês com recheio gelado, macio e refrescante.',
    price: 'R$ 14,90',
<<<<<<< HEAD
    image: [
      Mochi
    ]
=======
    image: '/Imagem/Mochi.jpeg',
>>>>>>> 090473200fb19fe7cfe38bf365bc10701656f063
  },
  {
    id: 2,
    title: 'Dorayaki',
    description: 'Panqueca japonesa recheada com doce de feijão azuki (anko).',
    price: 'R$ 11,90',
    image: '/Images/Dorayaki.jpg',
  },
  {
    id: 3,
    title: 'Sorvete de Matcha',
    description: 'Sorvete cremoso de chá verde japonês, levemente adocicado.',
    price: 'R$ 9,90',
    image: '/images/matcha-sorvete.jpg',
  },
  {
    id: 4,
    title: 'Anmitsu',
    description: 'Sobremesa tradicional com gelatina de ágar-ágar, frutas e calda doce de açúcar mascavo.',
    price: 'R$ 13,90',
    image: '/images/anmitsu.jpg',
  }
];

function Sobremesas() {
  const [doces, setDoces] = useState([]);

  useEffect(() => {
    // Simula carregamento de dados
    setTimeout(() => {
      setDoces(sobremesasData);
    }, 500);
  }, []);

  return (
    <div className="promo-container">
      <NavBar />
      <h1>Sobremesas Japonesas</h1>
      <p className="sub">Delícias doces para fechar sua refeição com chave de ouro!</p>

      <div className="promo-grid">
        {doces.map(item => (
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

export default Sobremesas;
