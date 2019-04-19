import React from 'react';
import styles from './ResultsList.module.scss';

const ResultsList = ({ items }) => {
    return(
        <div className={styles.table}>{items.id} {items.name}</div>
    )
}

export default ResultsList;