import React from 'react';
import Table from '../Table/Table';
import styles from './ResultsList.module.scss';

const ResultsList = ({ items }) => (
    <>
    {items.length ? (
        <Table events={items}/>
    ):(
        <p className={styles.info}>There's nothing to show. Please, search for an artist or city to display concerts...</p>
    )}
    </>      
);

export default ResultsList;