import React from 'react';
import styles from '../styles/Webmain.module.css'

const Webmain = () => {
  return (
    <main className={`contenedor ${styles.webmain}`}>
      <img src='/img/customizable_menu.png' alt='menu' className={styles.webmain__image}/>

      <div className={styles.webmain__textos}>
        <h2>A fully customizable code snippet editor</h2>
        <p>Fully customize the color scheme of your code snippet, or use our own premade color schemes. Export your code snippets in JPG, PDF, PNG, or any of the other 10+ common extensions.</p>
        <p className={styles.webmain__getstarted} >Get started <span className={styles.webmain__free} >— it's free</span></p>
      </div>
    </main>
  );
};

export default Webmain;
