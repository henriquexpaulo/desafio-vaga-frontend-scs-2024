import React from 'react'
import './Nav.css'
import soon from "../../assets/logo.svg"
import people from "../../assets/perfil.svg"

const Nav = () => {
  return (
    <header className="head">
      <nav className="nav">
        <a href="#">
          <img className="soon" src={soon} alt="Logo" />
        </a>
        <ul className="list">
          {['Home', 'Sobre', 'Tabela', 'Fale Conosco'].map((text, index) => (
            <li key={index} className="item">{text}</li>
          ))}
        </ul>
        <ul className="listPeople">
          <li><a href="#">Entrar</a></li>
          <li>
            <a href="#">
              <img src={people} alt="Perfil" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
