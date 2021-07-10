import React from 'react';
import styleContainer from '../common/styles/Conteiner.module.css'
import styles from './Contacts.module.css';


function Contacts() {
    return (
        <div className={styles.wrapContacts}>
            <div className={`${styleContainer.conteiner} ${styles.myContactsConteiner}`}>
                <h2 className={styles.title}>Контакты</h2>
                <div className={styles.shape}>
                    <form className={styles.form}>
                        <input className={styles.input} />
                        <input className={styles.input} />
                        <textarea />
                    </form>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;