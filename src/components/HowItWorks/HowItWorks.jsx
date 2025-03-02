import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: 'search',
      title: 'Find Local NGOs',
      description: 'Search for NGOs in your area that are accepting donations.'
    },
    {
      icon: 'select',
      title: 'Select Items to Donate',
      description: 'Choose from categories like clothes, books, toys, food, and more.'
    },
    {
      icon: 'schedule',
      title: 'Schedule a Pickup',
      description: 'Set a convenient time for item pickup or drop-off.'
    },
    {
      icon: 'track',
      title: 'Track Your Impact',
      description: 'See how your donations have helped the community.'
    }
  ];

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepIcon}>
                {step.icon === 'search' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                )}
                {step.icon === 'select' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                )}
                {step.icon === 'schedule' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                )}
                {step.icon === 'track' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                )}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <a href="#donation-categories" className={styles.btnStartDonating}>Start Donating</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;