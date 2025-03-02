import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>DonateKindly</h1>
        </div>

        <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav
          className={`${styles.navigation} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <ul>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#donation-categories">Categories</a>
            </li>
            <li>
              <a href="#featured-ngos">NGOs</a>
            </li>
            <li>
              <a href="#impact">Impact</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/login" className={styles.btnLogin}>
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className={styles.btnSignup}>
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
