import { useState } from "react";

function Adicionar() {
    const [Adicionado, setAdicionado] = useState(false); // o estado que se encontra "Adicionado"

    // Função para lidar com o clique no botão de curtida
    function CliqueAdicionar() {
        setCurtido(!Adicionado); // Marca o botão como curtido
    }


    return (
        <div className="cartao">
            <div className="curtir">
                <button 
                    onClick={CliqueAdicionar} 
                    className={Adicionado ? "adicionar" : "nao-adicionar"}
                >
                    {curtido ? "Adicionado!! 😉" : "Quero esse! 🍱"}
                </button>
            </div>
        </div>
    );
}

export default Adicionar;