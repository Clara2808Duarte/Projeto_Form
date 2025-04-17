import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Temaki from './Pages/Temaki';
import SobreMesa from './Pages/SobreMesa';
import ItensAdiconais from './Pages/ItensAdicionais';
import Combo from './Pages/Combo';
import Promocoes from './Pages/Promocoes'
import Finalizar from './Pages/FormularioFinal'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Temaki" element={<Temaki />} />
        <Route path="/Sobremesas" element={<SobreMesa />} />
        <Route path="/Adicionais" element={<ItensAdiconais />} />
        <Route path="/Sushi" element={<Combo />} />
        <Route path="/Promocoes" element={<Promocoes />} />
        <Route path="/Finalizar" element={<Finalizar />} />

      </Routes>
    </Router>
  );
}

export default App;
