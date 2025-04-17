import { useState } from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function FormularioFinal() {
  const [form, setForm] = useState({});
  const [erro, setErro] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const camposObrigatorios = ["nome", "email", "telefone", "sexo", "escolaridade", "opcao"];
    const camposPreenchidos = camposObrigatorios.every((campo) => form[campo]);

    if (!camposPreenchidos) {
      setErro("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setErro("");
    localStorage.setItem("formularioUrbanSushi", JSON.stringify(form));
    alert("Formulário salvo com sucesso!");
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Formulário Final</h2>
        <form className="formulario" onSubmit={handleSubmit}>
          <label>Nome:<input name="nome" type="text" onChange={handleChange} /></label>
          <label>Email:<input name="email" type="email" onChange={handleChange} /></label>
          <label>Telefone:<input name="telefone" type="text" onChange={handleChange} /></label>

          <fieldset>
            <legend>Sexo:</legend>
            <label><input type="radio" name="sexo" value="masculino" onChange={handleChange} /> Masculino</label>
            <label><input type="radio" name="sexo" value="feminino" onChange={handleChange} /> Feminino</label>
          </fieldset>

          <fieldset>
            <legend>Escolaridade:</legend>
            <label><input type="radio" name="escolaridade" value="fundamental" onChange={handleChange} /> Fundamental</label>
            <label><input type="radio" name="escolaridade" value="medio" onChange={handleChange} /> Médio</label>
            <label><input type="radio" name="escolaridade" value="superior" onChange={handleChange} /> Superior</label>
          </fieldset>

          <fieldset>
            <legend>Escolha suas opções:</legend>
            <label><input type="radio" name="opcao" value="Temaki" onChange={handleChange} /> Temaki</label>
            <label><input type="radio" name="opcao" value="Hotholl" onChange={handleChange} /> Hotholl</label>
            <label><input type="radio" name="opcao" value="Combinado" onChange={handleChange} /> Combinado</label>
          </fieldset>

          {erro && <p className="erro">{erro}</p>}

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
