import React from 'react';
import styles from './Popup.module.scss';

const Popup = ({ items }) => {
return (
  <section className={styles.wrapper}>
    <h2 className={styles.title}>There is more than one artist matching your inquiry. Please, choose one of them from the list below:</h2>
    {items.map(item => (
            <div className={styles.artist_data} key={item.id}>{item.id} {item.name}</div>
    ))}  
  </section>  
);}

export default Popup;