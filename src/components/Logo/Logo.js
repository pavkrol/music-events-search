import React from 'react';
import styles from './Logo.module.scss';


const Logo = ({ type, children }) => {
    return(
        <>
            { type === 'title' ? (
                <h1 className={styles.logo}>{children}</h1>
            ) : (
                <h2 className={styles.logoSmall}>{children}</h2>
            )
            }
        </>
    );
}

export default Logo;