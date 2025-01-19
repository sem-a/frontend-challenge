import React from 'react';
import styles from './index.module.css';

const Error: React.FC = () => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>Произошла ошибка при загрузке данных!</p>
    </div>
  );
};

export default Error;