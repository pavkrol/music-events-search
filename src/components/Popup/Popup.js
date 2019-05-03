import React from 'react';
import AppContext from "../../context";
import styles from './Popup.module.scss';

const Popup = ({ items, type }) => {
return (
    <AppContext.Consumer>
        {context => (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>There is more than one item matching your inquiry. Please, choose one of them from the list below:</h2>
            {type==="artist" ? (
                items.map(item => (
                    <button 
                    key={item.id}
                    className={styles.confirm} 
                    data-name={item.name} 
                    onClick={(e) => {
                        context.closePopup();
                        context.searchEvent(e.target.dataset.name, "artist")}}>
                    {item.name}
                    </button>
            ))
            ) : (
                items.map(item => (
                    <button 
                    key={item.id}
                    className={styles.confirm} 
                    data-id={item.id} 
                    onClick={(e) => {
                        context.closePopup();
                        context.searchEvent(e.target.dataset.id, "city")}}>
                    {item.name}, {item.country}, {item.state}
                </button> ))
            )}
              
        </section>  
        )}
    </AppContext.Consumer>
);}

export default Popup;