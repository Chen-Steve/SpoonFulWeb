// TeamMember.tsx
import React from 'react';
import styles from '@/styles/TeamMember.module.css';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, bio }) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.memberImageWrapper}>
        <img className={styles.memberImage} src={imageUrl} alt={name} />
      </div>
      <div className={styles.memberInfo}>
        <div className={styles.memberName}>{name}</div>
        <p className={styles.memberTitle}>{role}</p>
      </div>
      <div className={styles.memberDescription}>{bio}</div>
    </div>
  );
};

export default TeamMember;
