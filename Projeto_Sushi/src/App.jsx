import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Temaki from './Pages/Temaki';
import SobreMesa from './Pages/SobreMesa';
import ItensAdiconais from './Pages/ItensAdicionais';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Temaki" element={<Temaki />} />
        <Route path="/SobreMesa" element={<SobreMesa />} />
        <Route path="/ItensAdicionais" element={<ItensAdiconais />} />
      </Routes>
    </Router>
  );
}

export default App;
