import { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Combo1 from '../assets/Combo1.png'
import Combo2 from '../assets/Combo2.png'
import Combo3 from '../assets/Combo3.png'
import Combo4 from '../assets/Combo4.png'
import Footer from '../Components/Footer'


const combosData = [
  {
    id: 1,
    title: 'Combo Samurai',
    description: '8 hot rolls, 8 nigiris de salmão e 1 temaki de camarão crocante.',
    price: 'R$ 72,90',
    image: [
      Combo1
    ]
  },
  {
    id: 2,
    title: 'Combo Fuji',
    description: '16 peças variadas: uramaki, hossomaki, joy e 2 sashimis especiais.',
    price: 'R$ 68,90',
    image: [
      Combo2
    ]
  },
  {
    id: 3,
    title: 'Combo Especial do Chef',
    description: '30 peças selecionadas pelo chef com ingredientes premium.',
    price: 'R$ 99,90',
    image: [
      Combo3
    ]
  },
  {
    id: 4,
    title: 'Combo Zen',
    description: 'Opção leve e vegana com 12 peças e 1 temaki de manga com tofu.',
    price: 'R$ 52,90',
    image: [
      Combo4
    ]
  }
];


function CombosSushi() {
   // Declara um estado chamado 'combos' e a função 'setCombos' para atualizá-lo
  // Inicialmente, 'combos' é um array vazio
  const [combos, setCombos] = useState([]);
  
  // O useEffect será executado quando o componente for montado (apenas uma vez)
  useEffect(() => {
    // Simula o carregamento de dados de maneira assíncrona usando 'setTimeout'
    setTimeout(() => {
      // Após 500ms, os dados simulados (combosData) são passados para o estado 'combos'
      setCombos(combosData);
    }, 500);  // Delay de 500ms
  }, []); // O array vazio indica que esse efeito será executado apenas uma vez, na primeira renderização

  return (
    <>
    <div className="promo-container">
      <NavBar />
      <h1>COMBOS DE SUSHI</h1>
      <p className="sub">Combinações especiais para quem ama variedade e sabor!</p>

      <div className="promo-grid">
        {combos.map(item => (
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

export default CombosSushi;
