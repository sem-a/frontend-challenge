import React from 'react';
import styles from './index.module.css';

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loading;
