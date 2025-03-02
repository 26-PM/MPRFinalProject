import React from 'react';
import styles from './FeaturedNGOs.module.css';

const FeaturedNGOs = () => {
  const ngos = [
    {
      name: 'Hope Foundation',
      logo: 'hope-foundation.jpg',
      description: 'Dedicated to helping underprivileged children with education and healthcare.',
      urgentNeeds: ['School supplies', 'Children\'s clothing', 'Books']
    },
    {
      name: 'Green Earth Initiative',
      logo: 'green-earth.jpg',
      description: 'Working towards environmental conservation and sustainable living practices.',
      urgentNeeds: ['Gardening tools', 'Recycling bins', 'Educational materials']
    },
    {
      name: 'Helping Hands',
      logo: 'helping-hands.jpg',
      description: 'Supporting homeless individuals with essential supplies and job training.',
      urgentNeeds: ['Winter clothing', 'Non-perishable food', 'Hygiene products']
    },
    {
      name: 'Animal Rescue Network',
      logo: 'animal-rescue.jpg',
      description: 'Rescuing and rehabilitating abandoned and injured animals.',
      urgentNeeds: ['Pet food', 'Blankets', 'Toys', 'Cleaning supplies']
    }
  ];

  return (
    <section id="featured-ngos" className={styles.featuredNGOs}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured NGOs</h2>
        <div className={styles.ngosContainer}>
          {ngos.map((ngo, index) => (
            <div key={index} className={styles.ngoCard}>
              <div className={styles.ngoLogo}>
                <div className={styles.placeholderLogo}>
                  {ngo.name.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              <h3 className={styles.ngoName}>{ngo.name}</h3>
              <p className={styles.ngoDescription}>{ngo.description}</p>
              <div className={styles.urgentNeeds}>
                <h4>Urgent Needs:</h4>
                <ul>
                  {ngo.urgentNeeds.map((need, i) => (
                    <li key={i}>{need}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.ngoActions}>
                <a href="#" className={styles.btnViewProfile}>View Profile</a>
                <a href="#" className={styles.btnDonate}>Donate Now</a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAll}>
          <a href="#" className={styles.btnViewAllNGOs}>View All NGOs</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNGOs;