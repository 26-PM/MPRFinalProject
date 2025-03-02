import React from 'react';
import styles from './DonationCategories.module.css';

const DonationCategories = () => {
  const categories = [
    {
      icon: 'clothing',
      title: 'Clothing & Accessories',
      description: 'Donate gently used clothing, shoes, and accessories.'
    },
    {
      icon: 'books',
      title: 'Books & Educational Materials',
      description: 'Share knowledge with books, textbooks, and school supplies.'
    },
    {
      icon: 'toys',
      title: 'Toys & Games',
      description: 'Bring joy with toys, games, and sports equipment.'
    },
    {
      icon: 'furniture',
      title: 'Furniture & Home Goods',
      description: 'Provide furniture, appliances, and household items.'
    },
    {
      icon: 'food',
      title: 'Food & Groceries',
      description: 'Help fight hunger with non-perishable food items.'
    },
    {
      icon: 'electronics',
      title: 'Electronics & Devices',
      description: 'Donate working electronics, computers, and phones.'
    }
  ];

  return (
    <section id="donation-categories" className={styles.donationCategories}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Can You Donate?</h2>
        <div className={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryIcon}>
                {category.icon === 'clothing' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"></path>
                  </svg>
                )}
                {category.icon === 'books' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                )}
                {category.icon === 'toys' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                  </svg>
                )}
                {category.icon === 'furniture' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="8" rx="2"></rect>
                    <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"></path>
                    <path d="M12 19v3"></path>
                    <path d="M8 19v3"></path>
                    <path d="M16 19v3"></path>
                  </svg>
                )}
                {category.icon === 'food' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                )}
                {category.icon === 'electronics' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                )}
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
              <a href="#" className={styles.btnDonate}>Donate</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationCategories;