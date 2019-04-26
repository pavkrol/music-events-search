import React from 'react';
import styles from './TableRow.module.scss';

const TableRow = ({ row }) => (
    <tr className={styles.row}>
        <td>{row.date}</td>
        <td>{row.city}</td>
        <td>{row.artist}</td>
        <td>{row.venue}</td>
        <td><a className={styles.tickets} href={row.tickets_link} target="_blank" rel="noopener noreferrer">Buy tickets</a></td>  
    </tr>
);

export default TableRow;