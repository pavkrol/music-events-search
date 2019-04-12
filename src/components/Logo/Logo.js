import React from 'react';
import styles from './Logo.module.scss';


const Logo = ({ secondary, children }) => {
    return(
        <>
            { !secondary ? (
                <h1 className={styles.logo}>{children}</h1>
            ) : (
                <h2 className={styles.logoSmall}>{children}</h2>
            )
            }
        </>
    );
}

export default Logo;