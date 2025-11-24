// pages/index.js

import React, { useState } from 'react';  // Importando o hook useState para interatividade
import './style.css';  // Importa o arquivo CSS para estilizar a página

function Home() {
  const [message, setMessage] = useState(''); // Usando useState para gerenciar a mensagem interativa

  // Função que é acionada quando o botão é clicado
  const handleButtonClick = () => {
    setMessage('Você clicou no botão! Bem-vindo ao ByteShield.');
  };

  // Função que lida com o envio do formulário de contato
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário
    const name = event.target.name.value; // Obtém o nome do formulário
    const email = event.target.email.value; // Obtém o email do formulário

    if (name && email) {
      setMessage(`Obrigado pelo contato, ${name}!`);
    } else {
      setMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container">
      {/* Cabeçalho */}
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Funcionalidades</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção Principal */}
      <section id="home">
        <h1>Bem-vindo ao ByteShield!</h1>
        <p>Aproveite a navegação interativa.</p>
        <button onClick={handleButtonClick}>Clique aqui para interagir</button>
        <p>{message}</p>
      </section>

      {/* Seção de Funcionalidades */}
      <section id="features">
        <h2>Funcionalidades</h2>
        <p>Confira algumas funcionalidades incríveis que oferecemos.</p>
        <ul>
          <li>Proteção de Dados</li>
          <li>Segurança de Navegação</li>
          <li>Monitoramento de Riscos</li>
        </ul>
      </section>

      {/* Seção de Contato */}
      <section id="contact">
        <h2>Contato</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
