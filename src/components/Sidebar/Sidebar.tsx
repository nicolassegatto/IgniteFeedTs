import styles from "./Sidebar.module.css"
import {PencilLine} from 'phosphor-react'
import { Avatar } from "../Avatar/Avatar"

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://blog.rocketseat.com.br/content/images/2020/08/boost.png" alt="cover" />
        <div className={styles.profile}>
          <Avatar src="https://github.com/nicolassegatto.png"/>
          <strong>Nicolas Segatto</strong>
          <span>FullStack Developer</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20}/> Editar seu perfil
          </a>
        </footer>   
    </aside>
  )
}