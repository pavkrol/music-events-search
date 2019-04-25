import React from 'react';
import styles from './Popup.module.scss';

const Popup = ({ items }) => {
return (
  <section className={styles.wrapper}>
    <h2 className={styles.title}>There is more than one artist matching your inquiry. Please, choose one of them from the list below:</h2>
    {items.map(item => (
            <ul className={styles.artist_data} key={item.id}>
                <li className={styles.artist_data__cell}>{item.id}</li> 
                <li className={styles.artist_data__cell + ' ' + styles.artist_data__center}>{item.name}</li>
                <li><button className={styles.confirm}>This one</button></li>
            </ul>
    ))}  
  </section>  
);}

export default Popup;