import React from 'react';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.header__contenido}`}>
                <div className={styles.barra}>
                    <img src='/img/logo.svg' alt='Snipper Logo' className={styles.barra__logo} />

                    <div className={styles.barra__items}>
                        <img src='/img/search_icon.svg' alt='buscar' className={styles.barra__buscar} />
                        <img src='/img/hamburger_menu.svg' alt='hamburger menu' className={styles.barra__hamburger} />
                        <p className={styles.barra__signin} >Sign in</p>
                        <p className={styles.barra__getstarted} >Get started <span className={styles.barra__free} >— it's free</span></p>
                    </div>
                </div>
            </div>

            <div className={`contenedor ${styles.header__textos}`}>
                <h1>Gorgeous Code Snippets</h1>
                <p>With Snipper, create fully customizable code snippets in a matter of seconds right from your browser.</p>
                <p className={styles.header__getstarted} >Get started <span className={styles.header__free} >— it's free</span></p>
                <p>No credit card required.</p>
                <img src='/img/snippet_image.png' alt='snippet image'  className={styles.header__image}/>
            </div>
        </header>
  );
};

export default Header;
