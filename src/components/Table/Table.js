import React from 'react';
import styles from './Table.module.scss';

const Table = ({ items }) => (
    <table className={styles.container}>
        <thead className={styles.header}>
          <tr>
            <th>Date</th>
            <th>City</th>
            <th>Artist</th>
            <th>Venue</th>
            <th>Availibility</th>
            <th>Buy tickets</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
            {
                items.forEach(element => (
                    <TableRow row={element} />
                ))
            }
        </tbody>
    </table>
);

export default Table;
