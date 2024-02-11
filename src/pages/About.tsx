import React from 'react';
import styles from '@/styles/About.module.css'; 

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.futureDevelopmentHeading}>
        <h1 className={styles.heading}>About SpoonFul</h1>
        
        <h2 className={styles.subheading}>Background</h2>
        <p>The origins of this idea date back to an early version called Food Security Initiative, in which my high school friend and I went from house to house in our neighborhood picking up food donations from families we knew and driving them over to the Rhode Island food bank in one trip.</p>

        <h2 className={styles.subheading}>Mission</h2>
        <p>Spoonful is a platform connecting households with food kitchens to facilitate food donations for people in need, utilizing a mobile app to manage donor information, incentivize participation through various features, and cover operational costs through advertisements.</p>

        <h2 className={styles.subheading}>Value Proposition</h2>
        <p>Our customer target centers on individual households with more food than they need, who face the guilt of wasting food and the frustration of wasting money. Spoonful mobile alleviates both of those problems, all while providing additional stocks of food to support insecure families.</p>
      </section>
      <div className="presentationContainer">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQCBDZmAK-E1bg7gd5P6_2w0HkkhaZ-01Vroi1t7874jfwYF5apGcCf0md82M5kpcRkKyVsVgA0MqWU/embed?start=false&loop=false&delayms=3000" width="800" height="569"></iframe>      
    </div>


    <section className={styles.futureDevelopmentHeading}>
        <h2 className={styles.subheading}>Future Development</h2>
        
        <div className={styles.developmentItem}>
          <h3>1. Spoonful Navigation ★</h3>
          <p>Visual representation of donor supply and kitchen demand</p>
          <p>Transportation routes from A to B</p>
        </div>

        <div className={styles.developmentItem}>
          <h3>2. Spoonful Wrapped ★</h3>
          <p>Comprehensive overview of user&apos;s impact (incentivize future donations) + Cost saving strategy</p>
          <p>As they get better at saving on food that they waste- they can use that money towards philanthropic efforts</p>
        </div>

        <div className={styles.developmentItem}>
          <h3>3. Spoonful Social</h3>
          <p>Donor view: How many perishables? How many non-perishables?</p>
          <p>Beneficiary view: How many resources do you need? When do you need them?</p>
        </div>

        <div className={styles.developmentItem}>
          <h3>4. Spoonful Newsletter</h3>
          <p>Ranking of popular companies on how much food they waste (to encourage future collaborations- Revenue stream)</p>
        </div>
      </section>

    </div>
  );
};

export default About;
