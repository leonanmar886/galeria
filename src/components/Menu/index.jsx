import home from '../../assets/icons/home.png'
import maisCurtidas from '../../assets/icons/mais-curtidas.png'
import maisVistas from '../../assets/icons/mais-vistas.png'
import novas from '../../assets/icons/novas.png'
import surpreendame from '../../assets/icons/surpreenda-me.png'

import styles from './Menu.module.scss';

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <img alt="" src={home}/>
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img alt="" src={maisCurtidas}/>
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img alt="" src={maisVistas}/>
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img alt="" src={novas}/>
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img alt="" src={surpreendame}/>
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}