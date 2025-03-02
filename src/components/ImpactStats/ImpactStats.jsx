import React from 'react';
import styles from './ImpactStats.module.css';

const ImpactStats = () => {
  const stats = [
    {
      value: 50000,
      label: 'Items Donated',
      icon: 'gift'
    },
    {
      value: 200,
      label: 'NGOs Registered',
      icon: 'building'
    },
    {
      value: 10000,
      label: 'Donors',
      icon: 'users'
    },
    {
      value: 45,
      label: 'Cities Covered',
      icon: 'map'
    }
  ];

  return (
    <section id="impact" className={styles.impactStats}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Impact</h2>
        
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statIcon}>
                {stat.icon === 'gift' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                )}
                {stat.icon === 'building' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="6" x2="12.01" y2="6"></line>
                    <line x1="12" y1="10" x2="12.01" y2="10"></line>
                    <line x1="12" y1="14" x2="12.01" y2="14"></line>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                )}
                {stat.icon === 'users' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                )}
                {stat.icon === 'map' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                  </svg>
                )}
              </div>
              <div className={styles.statValue}>{stat.value.toLocaleString()}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;