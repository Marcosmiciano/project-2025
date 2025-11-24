// pages/index.js

import React, { useState } from 'react';

function Home() {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('Você clicou no botão! Bem-vindo ao ByteShield.');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    if (name && email) {
      setMessage(`Obrigado pelo contato, ${name}!`);
    } else {
      setMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Funcionalidades</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h1>Bem-vindo ao ByteShield!</h1>
        <p>Aproveite a navegação interativa.</p>
        <button onClick={handleButtonClick}>Clique aqui para interagir</button>
        <p>{message}</p>
      </section>

      <section id="features">
        <h2>Funcionalidades</h2>
        <p>Confira algumas funcionalidades incríveis que oferecemos.</p>
        <ul>
          <li>Proteção de Dados</li>
          <li>Segurança de Navegação</li>
          <li>Monitoramento de Riscos</li>
        </ul>
      </section>

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
