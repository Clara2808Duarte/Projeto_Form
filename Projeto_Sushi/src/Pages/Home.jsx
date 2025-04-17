import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import Temaki from "../assets/Temaki.jpeg";
import SobreMesa from "../assets/Doces.png";
import ItensAdicionais from "../assets/itens.jpg";

function Home() {
  return (
    <>
      <section>
        <Nav />
      </section>
      <Carrosel />
      <br />
      <br />
      <br />
      <br />
      <section>
        Bem-vindo ao Urban Sushi, o seu restaurante japonês de referência!
        Oferecemos uma variedade incrível de pratos autênticos da culinária
        japonesa, com um toque moderno e inovador. Venha saborear nossos
        temakis, sushis, sashimis e outras delícias que vão te surpreender a
        cada mordida.
      </section>
      <br />
      <br />
      <br />
      <br />
      <div >
        <div>
          <h6> Temaki </h6>
          <p>
            O temaki é um dos queridinhos da culinária japonesa. Feito com uma
            alga crocante em formato de cone, ele é recheado com arroz temperado
            e ingredientes frescos como salmão, atum, camarão, cream cheese,
            pepino ou cebolinha. Além de saboroso, o temaki é prático e perfeito
            para quem quer saborear algo completo sem precisar de talheres. Cada
            mordida traz a mistura ideal de texturas e sabores — um clássico que
            nunca sai de moda.
          </p>
          <a>
            <img className="Img" src={Temaki} alt="Temaki" />
          </a>
        </div>

        <div>
          <h6> Sobremesas </h6>
          <p>
            As sobremesas japonesas encantam pelo equilíbrio e suavidade.
            Diferente dos doces ocidentais, elas prezam por sabores sutis e
            ingredientes tradicionais como matcha (chá verde), anko (pasta de
            feijão vermelho) e mochi (arroz glutinoso). Entre os destaques estão
            o mochi com sorvete, o dorayaki (panqueca com recheio doce) e o
            sorvete de chá verde, todos leves e deliciosos. Cada sobremesa é uma
            pequena celebração da cultura e do cuidado típico da culinária
            japonesa.
          </p>
          <a>
            <img className="Img" src={SobreMesa} alt="Doce" />
          </a>
        </div>

        <div>
          <h6> Itens Adicionais </h6>
          <p>
            Além dos pratos principais, os itens adicionais de um restaurante
            japonês enriquecem a refeição com sabores autênticos. Entradas como
            edamame (soja verde cozida), gyoza (pastelzinho recheado) e sunomono
            (salada agridoce de pepino) abrem o apetite com leveza. Para
            acompanhar, opções como arroz gohan, missoshiru (sopa de missô) e
            molhos especiais elevam ainda mais a experiência. São detalhes que
            fazem toda a diferença, trazendo equilíbrio e tradição a cada
            refeição.
          </p>
          <a>
            <img className="Img" src={ItensAdicionais} alt="itens" />
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Home;
