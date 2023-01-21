import home from '../../assets/icones/home.png'
import maisCurtidas from '../../assets/icones/mais-curtidas.png'
import maisVistas from '../../assets/icones/mais-vistas.png'
import novas from '../../assets/icones/novas.png'
import surpreendame from '../../assets/icones/surpreenda-me.png'

import styles from './Menu.module.scss'

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.__list}>
                <li className={styles.__item}>
                    <img alt="" src={home}/>
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.__item}>
                    <img alt="" src={maisCurtidas}/>
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={styles.__item}>
                    <img alt="" src={maisVistas}/>
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.__item}>
                    <img alt="" src={novas}/>
                    <a href="/">Novas</a>
                </li>
                <li className={styles.__item}>
                    <img alt="" src={surpreendame}/>
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}