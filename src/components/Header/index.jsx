import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

import styles from './Header.module.scss'

export default function Header(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do alura space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="o que você procura"/>
                <img src={search} alt="Icone de busca" />
            </div>
        </header>
    )
}