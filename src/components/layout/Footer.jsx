import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-content">
        <h1>Mustang</h1>
        <p>
          O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. 
          O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. 
          Apesar de ter sofrido grandes alterações ao longo dos anos, o Mustang é a mais antiga linha de automóveis da Ford.
        </p>
        <button className="footer-btn">Ver carro</button>
      </section>
    </footer>
  );
}

export default Footer;
