import React from 'react';
import styles from './ResultsList.module.scss';

const ResultsList = ({ items }) => (
    <>
    {items.length ? (
        <div>it's temporary div</div>
    ):(
        <p className={styles.info}>There's nothing to show. Please, search for an artist or city to display concerts...</p>
    )}
    </>      
);

export default ResultsList;