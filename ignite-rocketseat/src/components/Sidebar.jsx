import React from 'react';
import {PencilLine} from 'phosphor-react';
import styles from './Sidebar.module.css';


const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover} src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/ndelanhese.png' />
                <strong>Nathan Delanhese</strong>
                <span>Web Developer</span>
                <footer><a href=''> <PencilLine size={20} /> Editar seu perfil</a></footer>
            </div>

        </aside>
    );
}

export default Sidebar;