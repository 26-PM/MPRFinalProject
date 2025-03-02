import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Donor",
      image: "/images/testimonial-1.jpg",
      quote: "I've been donating my unused items for over a year now. The platform makes it incredibly easy to find NGOs near me and schedule pickups. It feels great knowing my items are helping those in need."
    },
    {
      id: 2,
      name: "David Chen",
      role: "NGO Partner",
      image: "/images/testimonial-2.jpg",
      quote: "As an NGO manager, this platform has revolutionized how we receive donations. The streamlined process helps us focus more on our mission rather than logistics. Our donation influx has increased by 60%!"
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Community Volunteer",
      image: "/images/testimonial-3.jpg",
      quote: "The transparency of this platform is what stands out. I can see exactly where my donations go and the impact they make. It's created a trusted bridge between donors and organizations."
    }
  ];

  return (
    <section className={styles.testimonialSection} id="testimonials">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What People Are Saying</h2>
        <div className={styles.testimonialGrid}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>"{testimonial.quote}"</div>
              <div className={styles.testimonialProfile}>
                <div className={styles.testimonialImage}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className={styles.testimonialInfo}>
                  <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                  <p className={styles.testimonialRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;