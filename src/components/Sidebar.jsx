import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=570&q=40" alt="cover"
            />
            <div className={styles.profile}>
                <Avatar src='https://github.com/prcordova.png'/>
                <strong>Pedro Ricardo</strong>
                <span>Web Developer</span>
                <footer>

                    <a href="#">
                        <PencilLine
                        size={20}
                        /> 
                         Editar seu perfil</a>
                </footer>
            </div>
        </aside>
    )
}