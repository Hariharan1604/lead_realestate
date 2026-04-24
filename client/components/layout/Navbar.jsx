'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#technology', label: 'Technology' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <span className="logo-icon">⬡</span>
          <span className="logo-text">Partn<span className="logo-accent">ero</span></span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link" onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta-group">
          <a href="#contact" className="nav-login">Login</a>
          <a href="#contact" className="nav-cta">Book a Demo</a>
        </div>

        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
