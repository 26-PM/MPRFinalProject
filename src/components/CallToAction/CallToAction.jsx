import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Make a Difference?</h2>
          <p className={styles.ctaText}>
            Your unused items can change someone's life. Start donating today and connect with NGOs in your community that are making real impact.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/donate" className={`${styles.ctaButton} ${styles.primaryButton}`}>
              Donate Now
            </Link>
            <Link to="/ngos" className={`${styles.ctaButton} ${styles.secondaryButton}`}>
              Find NGOs Near Me
            </Link>
          </div>
        </div>
        <div className={styles.ctaImage}>
          <img src="/images/donation-impact.jpg" alt="Donation impact" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;