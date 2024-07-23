import React, { useState } from 'react';
import '../styles/Testimonials.css'; // Certifique-se de que o CSS está correto
import { FaChevronDown, FaChevronUp, FaStar } from 'react-icons/fa'; // Adicione a importação dos ícones

const Testimonials = () => {
  // Estado para controlar o número de depoimentos visíveis e a exibição do botão
  const [visibleCount, setVisibleCount] = useState(3);
  const [showMore, setShowMore] = useState(false); // Controle para exibir "Mostrar Mais" ou "Mostrar Menos"

  const testimonials = [
    { text: "Ótima experiência, recomendo a todos!", author: "João Silva", rating: 5 },
    { text: "Comida deliciosa e atendimento excelente.", author: "Maria Oliveira", rating: 4 },
    { text: "Ambiente acolhedor e pratos incríveis.", author: "Carlos Souza", rating: 4 },
    { text: "Uma verdadeira delícia, voltarei com certeza!", author: "Ana Paula", rating: 5 },
    { text: "Serviço impecável e comida de primeira.", author: "Ricardo Lima", rating: 5 },
    { text: "Adorei o ambiente e a comida estava perfeita.", author: "Fernanda Silva", rating: 4 },
  ];

  const toggleVisibility = () => {
    if (showMore) {
      setVisibleCount(3);
    } else {
      setVisibleCount(testimonials.length);
    }
    setShowMore(!showMore);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>O que dizem nossos clientes</h2>
        <div className="testimonial-items">
          {testimonials.slice(0, visibleCount).map((item, index) => (
            <div className="testimonial-item" key={index}>
              <p>{item.text}</p>
              <div className="rating">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <h4>{item.author}</h4>
            </div>
          ))}
        </div>
        <button className="show-more" onClick={toggleVisibility}>
          {showMore ? 'Mostrar Menos' : 'Mostrar Mais'}
          {showMore ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
