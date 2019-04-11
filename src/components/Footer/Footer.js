import React from 'react';
import styles from './Footer.module.scss';
import FooterItem from './FooterItem';

const Footer = () => (
    <footer className={styles.wrapper}>
        <FooterItem href="https://github.com/pavkrol" name="pavkrol">Designed by</FooterItem>
        <FooterItem href="https://songkick.com" name="Songkick">Provided by</FooterItem>
        <FooterItem href="https://pexels.com" name="Pexels">Photos by</FooterItem>
    </footer>
);

export default Footer;