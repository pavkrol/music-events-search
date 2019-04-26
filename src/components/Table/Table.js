import React from 'react';
import TableRow from './TableRow';
import styles from './Table.module.scss';

const Table = ({ events }) => (
    <table className={styles.container}>
        <thead className={styles.header}>
          <tr>
            <th>Date</th>
            <th>City</th>
            <th>Artist</th>
            <th>Venue</th>
            <th>Buy tickets</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
            {
                events.map(element => (
                    <TableRow key={element.id}row={element} />
                ))
            }
        </tbody>
    </table>
);

export default Table;
