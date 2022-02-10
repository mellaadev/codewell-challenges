import React from 'react'
import styles from '../styles/Fiber.module.css'

const Fiber = () => {
  return (
    <section className={`contenedor ${styles.fiber}`}>
        <h3 className={styles.fiber__pretitle}>Why Fiber?</h3>
        <h2 className={styles.fiber__title}>A good portfolio means good employability.</h2>

        <div className={styles.fiber__grid}>
            <div className={styles.bloque}>
                <img src='/img/time.svg' alt='time' className={styles.bloque__imagen}/>
                <p className={styles.bloque__intro}>Build in minutes</p>
                <p className={styles.bloque__texto}>With a selection or premade templates you can bulld out a porttollo in less than 10 minutes</p>
            </div>

            <div className={styles.bloque}>
                <img src='/img/code.svg' alt='time' className={styles.bloque__imagen}/>
                <p className={styles.bloque__intro}>Add custom CSS</p>
                <p className={styles.bloque__texto}>Customize your personal portfolio even more with the abillity to add your own custom CSS styles.</p>
            </div>

            <div className={styles.bloque}>
                <img src='/img/allsizes.svg' alt='time' className={styles.bloque__imagen}/>
                <p className={styles.bloque__intro}>Responsive</p>
                <p className={styles.bloque__texto}>All Fiber templates are filly responsive to ensure the experience is seemless across all devices.</p>
            </div>
        </div>
    </section>
  )
}

export default Fiber