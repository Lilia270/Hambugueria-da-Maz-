import React, { useState } from 'react';
import '../styles/Menu.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Ícones para as setas

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Número de pratos exibidos por vez
  const itemsToShow = 3;
  
  // Lista de pratos
  const menuItems = [
   { title: 'Hambúrguer Raiz', description: 'R$ 22,50' },
   { title: 'Sabor do Povo', description: 'R$ 25,00' },
   { title: 'Sabor do Sertão', description: 'R$ 30,00' },
   { title: 'Picanha Power', description: 'R$ 35,00' },
   { title: 'Mistura Maravilhosa', description: 'R$ 40,00' },
   { title: 'Grelhado à Moda', description: 'R$ 38,00' },
   { title: 'Picanha Especial', description: 'R$ 42,00' },
   { title: 'Frango ao Barbecue', description: 'R$ 28,00' },
   { title: 'Costela na Brasa', description: 'R$ 50,00' }
    
  ];

  // Função para avançar os itens
  const nextItems = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % menuItems.length);
  };

  // Função para retroceder os itens
  const prevItems = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + menuItems.length) % menuItems.length);
  };

  // Slice para mostrar apenas os itens no índice atual
  const currentItems = menuItems.slice(currentIndex, currentIndex + itemsToShow).concat(menuItems.slice(0, Math.max(currentIndex + itemsToShow - menuItems.length, 0)));

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Nosso Menu</h2>
        <div className="menu-carousel">
          <button className="carousel-button prev" onClick={prevItems}>
            <FaChevronLeft />
          </button>
          <div className="menu-items">
            {currentItems.map((item, index) => (
              <div className="menu-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <button className="carousel-button next" onClick={nextItems}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
