import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.footer__contenido}`}>
            <div className={styles.footer__block}>
                <div className={styles.footer__info}>
                    <h3 className={styles.footer__title}>Fiber</h3>
                    <p className={styles.footer__text}>With Fiber, you can setup your own personal porttolio in minutes with dozens</p>
                </div>

                <p className={styles.footer__from}>Made with 🖤 from Asturias</p>
            </div>

            <div className={styles.footer__block}>
                <h3 className={styles.footer__title}>Sitemap</h3>

                <ul className={styles.footer__list}>
                    <li className={styles.footer__listitem}>Homepage</li>
                    <li className={styles.footer__listitem}>Pricing</li>
                    <li className={styles.footer__listitem}>Testimonials</li>
                    <li className={styles.footer__listitem}>Features</li>
                </ul>
            </div>

            <div className={styles.footer__block}>
                <h3 className={styles.footer__title}>Resources</h3>

                <ul className={styles.footer__list}>
                    <li className={styles.footer__listitem}>Support</li>
                    <li className={styles.footer__listitem}>Contact</li>
                    <li className={styles.footer__listitem}>FAQ</li>
                </ul>
            </div>

            <div className={styles.footer__block}>
                <h3 className={styles.footer__title}>Company</h3>

                <ul className={styles.footer__list}>
                    <li className={styles.footer__listitem}>About</li>
                    <li className={styles.footer__listitem}>Customers</li>
                    <li className={styles.footer__listitem}>Blog</li>
                </ul>
            </div>

            <div className={styles.footer__block}>
                <h3 className={styles.footer__title}>Portfolios</h3>

                <ul className={styles.footer__list}>
                    <li className={styles.footer__listitem}>Sarah Andrews</li>
                    <li className={styles.footer__listitem}>Mathew Higgins</li>
                    <li className={styles.footer__listitem}>Janice Dave</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer