import React from "react";
import '../styles/Hero.css'; 
import heroImage from '../assets/hero-image.png';

const Hero = () => {
    return (
        <section className="hero">
            <img src={heroImage} alt="Imagem de Destaque" />
            <div className="hero-text">  
                <h2>E aí, siô!<br/>Bora comer<br/>um lanche?</h2>
                <p>Venha experimentar o melhor do Maranhão com a gente!</p>
                <a href="#contact">
                    <button className="btn-saber-mais">Eu quero</button>
                </a>
                </div>

            
        </section>
    );
};

export default Hero;