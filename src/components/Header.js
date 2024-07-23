import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header'>
            <div className='header-container'>
                <h1>Restaurante da Mazé</h1>
                <nav className={menuOpen ? 'open' : ''}>
                    <ul>
                        <li><a href='#about'>Sobre</a></li>
                        <li><a href='#menu'>Menu</a></li>
                        <li><a href='#testimonials'>Depoimentos</a></li>
                        <li><a href='#contact'>Contato</a></li>
                    </ul>
                    <span className="menu-icon close" onClick={toggleMenu}>&times;</span>
                </nav>
                <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
            </div>
        </header>
    );
};

export default Header;
