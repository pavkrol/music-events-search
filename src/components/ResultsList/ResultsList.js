import React from 'react';
import Popup from '../Popup/Popup';
import styles from './ResultsList.module.scss';

const ResultsList = ({ items }) => (
    <>
    {items.length ? (
        <Popup items={items}/>
    ):(
        <p className={styles.info}>There's nothing to show. Please, search for an artist or city to display concerts...</p>
    )}
    </>      
);

export default ResultsList;