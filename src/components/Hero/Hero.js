import React from 'react';
import styles from './Hero.module.scss';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';


const Hero = () => (
    <section className={styles.hero}>
        <Logo>eventify</Logo>
        <h2 className={styles.subtitle}>Find the best concerts in your city</h2>
        <Link className={styles.button} to='/search'>Let's go!</Link>
    </section>
);

export default Hero;