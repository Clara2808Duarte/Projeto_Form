// Importa o hook useState do React para gerenciar estado
import { useState } from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";


function FormularioFinal() {
  // Cria um estado chamado "form" que armazena os dados do formulário
  const [form, setForm] = useState({});

  // Cria um estado para armazenar mensagens de erro, caso o formulário esteja incompleto
  const [erro, setErro] = useState("");

  // Função que lida com alterações nos campos do formulário
  function AlteracosForm(e) {
    const { name, value } = e.target; // Extrai o nome e valor do campo que foi alterado
    // Atualiza o estado "form" com os novos valores, mantendo os antigos
    setForm((prev) => ({ ...prev, [name]: value })); //concatena, spreed 
  }

  // Função que lida com o envio do formulário
  function Submit(e) {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Lista de campos obrigatórios que devem ser preenchidos
    const camposObrigatorios = ["nome", "email", "telefone", "sexo", "escolaridade", "opcao"];

    // Verifica se todos os campos obrigatórios foram preenchidos
    const camposPreenchidos = camposObrigatorios.every((campo) => form[campo]);

    // Se algum campo estiver vazio, exibe mensagem de erro e cancela o envio
    if (!camposPreenchidos) {
      setErro("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Se tudo estiver preenchido corretamente, limpa o erro
    setErro("");

    // Salva os dados do formulário no localStorage com o nome "formularioUrbanSushi"
    localStorage.setItem("formularioUrbanSushi", JSON.stringify(form));

    // Exibe uma mensagem de sucesso para o usuário
    alert("Formulário salvo com sucesso!");'  '
  }

  // Abaixo começa o que será exibido na tela (JSX)
  return (
    <div>
      {/* Componente de navegação no topo da página */}
      <Navbar />

      {/* Container central do formulário com título */}
      <div className="container">
        <h2>Formulário Final</h2>

        {/* Formulário principal com evento de envio */}
        <form className="formulario" onSubmit={Submit}>

          {/* Campo para nome */}
          <label>
            Nome:
            <input name="nome" type="text" onChange={AlteracosForm} />
          </label>

          {/* Campo para email */}
          <label>
            Email:
            <input name="email" type="email" onChange={AlteracosForm} />
          </label>

          {/* Campo para telefone */}
          <label>
            Telefone:
            <input name="telefone" type="text" onChange={AlteracosForm} />
          </label>

          {/* Grupo de opções para selecionar o sexo */}
          <fieldset>
            <legend>Sexo:</legend>
            <label>
              <input type="radio" name="sexo" value="masculino" onChange={AlteracosForm} /> Masculino
            </label>
            <label>
              <input type="radio" name="sexo" value="feminino" onChange={AlteracosForm} /> Feminino
            </label>
          </fieldset>

          {/* Grupo de opções para selecionar a escolaridade */}
          <fieldset>
            <legend>Escolaridade:</legend>
            <label>
              <input type="radio" name="escolaridade" value="fundamental" onChange={AlteracosForm} /> Fundamental
            </label>
            <label>
              <input type="radio" name="escolaridade" value="medio" onChange={AlteracosForm} /> Médio
            </label>
            <label>
              <input type="radio" name="escolaridade" value="superior" onChange={AlteracosForm} /> Superior
            </label>
          </fieldset>

          {/* Grupo de opções para o cliente escolher um tipo de produto */}
          <fieldset>
            <legend>Escolha suas opções:</legend>
            <label>
              <input type="radio" name="opcao" value="Temakis" onChange={AlteracosForm} /> Temaki
            </label>
            <label>
              <input type="radio" name="opcao" value="Combo e Combinado" onChange={AlteracosForm} /> Combo e Combinado
            </label>
            <label>
              <input type="radio" name="opcao" value="Itens Adicionais" onChange={AlteracosForm} /> Itens Adicionais
            </label>
            <label>
              <input type="radio" name="opcao" value="Sobremesas" onChange={AlteracosForm} /> Sobremesas
            </label>
            <label>
              <input type="radio" name="opcao" value="Promoções" onChange={AlteracosForm} /> Promoções
            </label>
          </fieldset>

          {/* Exibe uma mensagem de erro se algum campo obrigatório estiver vazio */}
          {erro && <p className="erro">{erro}</p>}

          {/* Botão de envio do formulário */}
          <button type="submit" className="botao-enviar2">Enviar</button>
        </form>
      </div>

      {/* Componente de rodapé da página */}
      <Footer />
    </div>
  );
}

export default FormularioFinal;

