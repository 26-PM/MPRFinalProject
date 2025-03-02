import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>DonateConnect</h3>
            <p className={styles.footerDescription}>
              Connecting donors with local NGOs to make meaningful impact through item donations.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
            </div>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/donate">Donate Items</Link></li>
              <li><Link to="/ngos">Find NGOs</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/blog">Impact Stories</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>For NGOs</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/ngo-register">Register Your NGO</Link></li>
              <li><Link to="/ngo-dashboard">NGO Dashboard</Link></li>
              <li><Link to="/ngo-resources">Resources</Link></li>
              <li><Link to="/ngo-guidelines">Partner Guidelines</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact & Support</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/help-center">Help Center</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} DonateConnect. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Made with <FaHeart className={styles.heartIcon} /> for positive community impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;