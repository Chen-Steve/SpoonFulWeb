import React from 'react';
import TeamMember from './TeamMember';
import styles from '@/styles/TeamMember.module.css';

const teamMembers = [
    { name: 'Sophia Hall', role: 'Team Lead', imageUrl: '/path-to-image', bio: 'Sophia is a...' },
    { name: 'Mehar Bhasin', role: 'Analytics and Data', imageUrl: '/path-to-image', bio: 'Mehar is a...' },
  { name: 'Simar Singh', role: 'Networking', imageUrl: '/path-to-image', bio: 'Simar is a in...' },
  { name: 'Ruilin (Raylene) Guo', role: 'Management', imageUrl: '/path-to-image', bio: 'Ruilin is a in...' },
  { name: 'Fara Daredia', role: 'Logistics', imageUrl: '/path-to-image', bio: 'Fara is a in...' },
];

const TeamPage: React.FC = () => {
    return (
      <div className={styles.boardMembers}>
        <div className={styles.boardIntro}>
          <div className={styles.introText}>
            <div className={styles.introHeading}>Meet the Creators</div>
            <p className={styles.introDescription}>Learn more about our team who make everything possible.</p>
          </div>
        </div>
        <div className={styles.membersContainer}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    );
  };

export default TeamPage;
