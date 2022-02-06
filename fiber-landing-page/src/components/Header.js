import React from 'react';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.header__contenido}`}>
            <div className={styles.barra}>
                <h1 className={styles.barra__brand}>Fiber</h1>
                <div className={styles.barra__links}>
                    <p className={styles.barra__link}>Community</p>
                    <p className={styles.barra__link}>Pricing</p>
                    <p className={styles.barra__link}>Features</p>
                </div>
                <div className={styles.barra__sesion}>
                    <p className={styles.barra__iniciar}>Sign In</p>
                    <p className={styles.barra__registrar}>Sign Up</p>
                </div>
                <img src='/img/hamburger_menu.svg' alt='hamburger menu' className={styles.barra__menuresp} />
            </div>
            {/* A partir de aqui añadir estilos */}
            <div className={styles.header__hero}>

                <div className={styles.header__textos}>

                    <div className={styles.header__valoraciones}>

                        <div className={styles.header__stars}>
                            <img src='/img/star.svg' alt='estrella' className={styles.header__star} />
                            <img src='/img/star.svg' alt='estrella' className={styles.header__star} />
                            <img src='/img/star.svg' alt='estrella' className={styles.header__star} />
                            <img src='/img/star.svg' alt='estrella' className={styles.header__star} />
                            <img src='/img/star.svg' alt='estrella' className={styles.header__star} />
                        </div>

                        <p className={styles.header__rated}>Rated 4.8/5 (243 reviews)</p>
                    </div>

                    <h1 className={styles.header__heading}>Create your portfolio in minutes</h1>

                    <p className={styles.header__subheading}>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>

                    <div className={styles.header__options}>
                        <p className={styles.header__option}>Start Free Trial</p>
                        <p className={styles.header__option}>View Examples</p>
                    </div>

                    <div className={styles.header__additional}>

                        <div className={styles.header__added}>
                            <img src='/img/checkmark.svg' alt='checkmark' className={styles.header__checkmark}/>
                            <p className={styles.header__addedinfo}>No Credit Card Required</p>
                        </div>

                        <div className={styles.header__added}>
                            <img src='/img/checkmark.svg' alt='checkmark' className={styles.header__checkmark}/>
                            <p className={styles.header__addedinfo}>10 Free Templates</p>
                        </div>

                    </div>
                    
                </div>

                <img src='/img/hero-illustration.png' alt='hero-illustration' className={styles.header__image}/>

            </div>

        </div>
    </header>
  );
};

export default Header;
