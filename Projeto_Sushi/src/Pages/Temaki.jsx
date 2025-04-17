import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

 function Temaki() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2> TEMAKI </h2>
        <p>O temaki é um enrolado de alga em forma de cone, recheado com arroz e ingredientes variados como salmão, cream cheese e cebolinha.</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Temaki;