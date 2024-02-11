// PickUp.tsx
import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import styles from '@/styles/PickUp.module.css';
import blob from '@/styles/blob.module.css'
import Link from 'next/link';
import confetti from 'canvas-confetti';

const PickUp = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, question: string) => {
    setAnswers(prev => ({ ...prev, [question]: event.target.value }));
  };

  const handleSubmit = () => {
    // Example submit logic
    console.log('Submitting...');

    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 }, // Adjust origin for a different effect
      colors: ['#bb0000', '#ffffff'], // Customize colors to match your style
    });
  };

  return (
    <>
    <div className={styles.container}>
      <div className={styles.abstractShape}></div>
        <div className={blob.blob}>
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
        </svg>
    </div>
      <div className={styles.uploadBox}>
        <div className={styles.imageContainer}>
          {image ? (
            <img src={image as string} alt="Uploaded" className={styles.imagePreview} />
          ) : (
            <div onClick={triggerFileInput} className={styles.placeholder}>
              <Camera className={styles.uploadIcon} />
              <p className={styles.uploadText}>Please upload a picture...</p>
            </div>
          )}
          <input
            type="file"
            className={styles.hiddenInput}
            onChange={handleImageChange}
            ref={fileInputRef}
          />
        </div>
      </div>
      <div className={styles.questionsAndThanks}>
      <p className={styles.questionsHeading}>... and answer some questions</p>
        <div className={styles.questions}>
          <textarea
            className={styles.question}
            value={answers.q1}
            placeholder="1. Your first question here..."
            onChange={e => handleInputChange(e, 'q1')}
          />
          <textarea
            className={styles.question}
            value={answers.q2}
            placeholder="2. Your second question here..."
            onChange={e => handleInputChange(e, 'q2')}
          />
          <textarea
            className={styles.question}
            value={answers.q3}
            placeholder="3. Your third question here..."
            onChange={e => handleInputChange(e, 'q3')}
          />
        </div>
        <div className={styles.thankYouMessage}>
          <p>Thank you.</p>
        </div>
        <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>

      </div>
    </div>
    </>
  );
};

export default PickUp;
