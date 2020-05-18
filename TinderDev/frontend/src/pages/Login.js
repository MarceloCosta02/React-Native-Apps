import React, { useState } from "react"; // com a useState, podemos manipular toda a informação de entrada e saida de um componente

import './Login.css'; // quando vai importar somente um arquivo nao precisa por o from e o nome

import api from '../services/api'; // importa a nossa api (backend)

import logo from '../assets/logo.svg'; // importando o logo da app


// export default vai exportar essa função primeiro
export default function Login({ history }) {  // a propriedade history serve para fazer a navegação dos url

    const [username, setUsername] = useState(''); // cria a variável e a função de seta-lo, inicializa como null
 
    // função que é disparada quando o usuário der submit no form
    async function handleSubmit(e) { // recebe um evento

        e.preventDefault(); // bloqueia o redirecionamento para outra página sem as validações

        // a variavel resposta envia por post, o parametro da url que faltava (onde estao os devs)
        const response = await api.post('/devs', {
            username, 
        });        

        console.log(response)

        // pega somente o dado id, dentro do cadastro de devs /devs
        const { _id } = response.data;

        history.push(`/dev/${_id}`); // indica para qual página navegar o usuário em seguida
        // e envia um parametro
    }

    return( // sempre criar uma div de container para os componentes
        <div className="login-container">
            <form onSubmit={handleSubmit}> 
                 <img src = {logo} alt = "Tindev"/> 
                 <input placeholder="Digite seu usuário no Github"
                 value={username}
                 onChange={e => setUsername(e.target.value)} // é criado o evento e. E o e.target.value pega o valor digitado e joga no setUsername
                 />
                 <button type="submit">Enviar</button>
             </form>                    
        </div>
        // o alt significa texto alternativo
        // utilizando as { } indica que eu quero colocar uma variavel/codigo javascript no html
   
    );
}