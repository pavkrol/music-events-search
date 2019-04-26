import React from 'react';
import AppContext from "../../context";
import styles from './Popup.module.scss';

const Popup = ({ items }) => {
return (
    <AppContext.Consumer>
        {context => (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>There is more than one artist matching your inquiry. Please, choose one of them from the list below:</h2>
            {items.map(item => (
                        <button 
                        className={styles.confirm} 
                        data-name={item.name} 
                        onClick={(e) => {
                            context.closePopup();
                            context.searchEvent(e.target.dataset.name)}}>
                        {item.name}
                        </button>
            ))}  
        </section>  
        )}
    </AppContext.Consumer>
);}

export default Popup;