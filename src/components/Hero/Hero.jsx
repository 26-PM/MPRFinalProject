import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Connect Your Kindness to Those in Need</h1>
          <p>
            Donate items you no longer need to NGOs in your neighborhood. 
            Turn your unused possessions into someone else's treasures.
          </p>
          <div className={styles.buttons}>
            <a href="#donation-categories" className={styles.btnDonate}>Donate Now</a>
            <a href="#how-it-works" className={styles.btnLearnMore}>Learn More</a>
          </div>
        </div>
        <div className={styles.searchNGO}>
          <h3>Find NGOs Nearby</h3>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Enter your location" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;