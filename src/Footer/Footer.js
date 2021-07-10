import React from 'react';
import styleContainer from '../common/styles/Conteiner.module.css'
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.wrapFooter}>
            <div className={`${styleContainer.conteiner} ${styles.myFooterConteiner}`}>
                <h2 className={styles.title}>Дарья Курилович</h2>
                <div className={styles.cells}>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                </div>
                <span >@2021 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;