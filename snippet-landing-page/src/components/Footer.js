import React from 'react';
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
        <div className={`contenedor ${styles.footer}`}>
            <img src='/img/logo.svg' alt='Snipper Logo' className={styles.footer__logo} />

            <div className={styles.footer__links}>
                <p className={styles.footer__link}>Terms and Conditions</p>
                <p className={styles.footer__link}>Privacy Policy</p>
            </div>
        </div>
  );
};

export default Footer;
