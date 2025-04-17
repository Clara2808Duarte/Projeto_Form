import './Footer.css';
import Collab from '../assets/Colab.png'

function Footer() {
  return (
    <>
    <footer className='Flex-Row'>
      <section  className="footer">
      <p>Urban Sushi - Rua das Sushi Lovers, 123 - São Paulo, SP</p>
      <p>Telefone: (11) 1234-5678 | Email: contato@urbansushi.com.br</p>
      <p>&copy; 2025 Urban Sushi. Todos os direitos reservados.</p>
      </section>
    </footer>
    <img className="ImgCollab" src={Collab} alt="Collab" />
    </>
  );
}

export default Footer;
