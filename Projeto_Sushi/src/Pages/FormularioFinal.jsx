// Importa o hook useState do React para gerenciar estado
import { useState } from "react";

// Importa o componente Navbar que provavelmente está no topo da página
import Navbar from "../Components/NavBar";

// Importa o componente Footer que aparece no rodapé da página
import Footer from "../Components/Footer";

// Exporta a função principal do componente (página) FormularioFinal
export default function FormularioFinal() {
  // Cria um estado chamado "form" que armazena os dados do formulário
  const [form, setForm] = useState({});

  // Cria um estado para armazenar mensagens de erro, caso o formulário esteja incompleto
  const [erro, setErro] = useState("");

  // Função que lida com alterações nos campos do formulário
  function handleChange(e) {
    const { name, value } = e.target; // Extrai o nome e valor do campo que foi alterado
    // Atualiza o estado "form" com os novos valores, mantendo os antigos
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Função que lida com o envio do formulário
  function handleSubmit(e) {
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
    alert("Formulário salvo com sucesso!");
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
        <form className="formulario" onSubmit={handleSubmit}>

          {/* Campo para nome */}
          <label>
            Nome:
            <input name="nome" type="text" onChange={handleChange} />
          </label>

          {/* Campo para email */}
          <label>
            Email:
            <input name="email" type="email" onChange={handleChange} />
          </label>

          {/* Campo para telefone */}
          <label>
            Telefone:
            <input name="telefone" type="text" onChange={handleChange} />
          </label>

          {/* Grupo de opções para selecionar o sexo */}
          <fieldset>
            <legend>Sexo:</legend>
            <label>
              <input type="radio" name="sexo" value="masculino" onChange={handleChange} /> Masculino
            </label>
            <label>
              <input type="radio" name="sexo" value="feminino" onChange={handleChange} /> Feminino
            </label>
          </fieldset>

          {/* Grupo de opções para selecionar a escolaridade */}
          <fieldset>
            <legend>Escolaridade:</legend>
            <label>
              <input type="radio" name="escolaridade" value="fundamental" onChange={handleChange} /> Fundamental
            </label>
            <label>
              <input type="radio" name="escolaridade" value="medio" onChange={handleChange} /> Médio
            </label>
            <label>
              <input type="radio" name="escolaridade" value="superior" onChange={handleChange} /> Superior
            </label>
          </fieldset>

          {/* Grupo de opções para o cliente escolher um tipo de produto */}
          <fieldset>
            <legend>Escolha suas opções:</legend>
            <label>
              <input type="radio" name="opcao" value="Temakis" onChange={handleChange} /> Temaki
            </label>
            <label>
              <input type="radio" name="opcao" value="Combo e Combinado" onChange={handleChange} /> Combo e Combinado
            </label>
            <label>
              <input type="radio" name="opcao" value="Itens Adicionais" onChange={handleChange} /> Itens Adicionais
            </label>
            <label>
              <input type="radio" name="opcao" value="Sobremesas" onChange={handleChange} /> Sobremesas
            </label>
            <label>
              <input type="radio" name="opcao" value="Promoções" onChange={handleChange} /> Promoções
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
