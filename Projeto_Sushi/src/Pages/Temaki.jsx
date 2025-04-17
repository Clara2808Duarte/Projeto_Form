import { useEffect, useState } from 'react';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Frito from '../assets/Frito.png';
import Atum from '../assets/Atum.png'
import Salmao from '../assets/Salmão.png'
import Skin from '../assets/Skin.png'

const adicionaisData = [
  {
    id: 1,
    title: 'Temaki de Salmão Cru',
    description: 'Clássico e irresistível! Feito com salmão fresco, arroz temperado, cream cheese e cebolinha, envolto em alga crocante.',
    price: 'R$ 26,90',
    image: [
      Salmao
    ]
  },
  {
    id: 2,
    title: 'Temaki Frito',
    description: 'Crosta dourada por fora, cremoso por dentro! Salmão empanado com cream cheese, cebolinha e finalizado com molho tarê.',
    price: 'R$ 28,90',
    image: [
      Frito
    ]
  },
  {
    id: 3,
    title: 'Temaki de Atum',
    description: 'Sabor marcante e textura suave! Atum fresco com arroz, toque de cebolinha e alga crocante.',
    price: 'R$ 25,90',
    image: [
      Atum
    ]
  },
  {
    id: 4,
    title: 'Temaki Skin',
    description: 'Para quem ama crocância! Pele de salmão grelhada, bem temperada, com arroz, cream cheese e cebolinha.',
    price: 'R$ 24,90',
    image: [
      Skin
    ]
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
      <h1>TEKAMIS</h1>
      <p className="sub">Temakis fresquinhos que deixam cada mordida ainda mais especial!</p>

      <div className="promo-grid">
      {itens.map(item => ( // Itera sobre a lista de itens, renderizando um bloco de JSX para cada item
  <div key={item.id} className="promo-card"> {/* Cria um contêiner para o item com uma classe CSS e uma chave única */}
    <div className="image-wrapper"> {/* Contêiner para estilizar a imagem do item */}
      <img src={item.image} alt={item.title} /> {/* Exibe a imagem do item com uma descrição alternativa */}
      </div>
      <h2>{item.title}</h2> {/* Exibe o título do item */}
      <p>{item.description}</p> {/* Exibe a descrição do item */}
      <span className="price">{item.price}</span> {/* Exibe o preço do item com uma classe para estilo */}
    </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ItensAdicionais;