// Importa o componente de navegação (menu superior)
import NavBar from '../Components/NavBar'

// Importa o React e os hooks useEffect e useState para usar estado e efeitos colaterais
import React, { useEffect, useState } from 'react';

// Importa o arquivo CSS responsável pelo estilo desta página
import './Promocoes.css';

// Importa as imagens usadas nas promoções
import Barca from '../assets/Barca_Img.png'
import Temaki from '../assets/Tekmaki_Img.png'
import Combo from '../assets/Combo_Img.png'
import ComboP from '../assets/ComboPremium_Img.png'

// Importa o componente de rodapé da página
import Footer from '../Components/Footer'

// Array com os dados das promoções disponíveis
const promoData = [
  {
    id: 1, // ID único da promoção
    title: 'Combo Clássico', // Título do combo
    description: '10 sashimis, 8 uramakis, 1 temaki de salmão', // Descrição do combo
    price: 'R$ 59,90', // Preço do combo
    image: [ // Imagem do combo (como array)
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

// Declaração do componente funcional PromoSushi
function PromoSushi() {
  // Cria um estado para armazenar os combos (inicialmente vazio)
  const [combos, setCombos] = useState([]);

  // useEffect executa uma ação quando o componente é montado
  useEffect(() => {
    // Simula um carregamento de dados, como se viesse de uma API
    setTimeout(() => {
      setCombos(promoData); // Depois de 500ms, define os combos com os dados simulados
    }, 500); // Tempo de atraso: 0,5 segundos
  }, []); // Array vazio garante que execute apenas uma vez

  // Retorna o que será exibido na tela (JSX)
  return (
    <>
      {/* Container principal da página de promoções */}
      <div className="promo-container">
        {/* Exibe a barra de navegação no topo */}
        <NavBar />

        {/* Título principal da página */}
        <h1>🍣 PROMOÇÕES ESPECIAIS</h1>

        {/* Subtítulo */}
        <p className="sub">Combos irresistíveis de sushi e temaki pra você!</p>

        {/* Grade de promoções, exibindo os cards */}
        <div className="promo-grid">
          {/* Mapeia cada combo para criar um card na tela */}
          {combos.map(combo => (
            // Cada card precisa de uma key única (o id)
            <div key={combo.id} className="promo-card">
              {/* Container para a imagem do combo */}
              <div className="image-wrapper">
                {/* Exibe a imagem do combo */}
                <img src={combo.image} alt={combo.title} />
              </div>

              {/* Exibe o título do combo */}
              <h2>{combo.title}</h2>

              {/* Exibe a descrição do combo */}
              <p>{combo.description}</p>

              {/* Exibe o preço do combo */}
              <span className="price">{combo.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Exibe o rodapé da página */}
      <Footer />
    </>
  );
}

// Exporta o componente para que possa ser usado em outras partes do site
export default PromoSushi
