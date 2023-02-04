import logo from "./logo.png";
import search from "./search.png";
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo Alura Space" />
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="text" placeholder="Oque você procura?" />
        <img src={search} alt="Icone de Lupa" />
      </div>
    </header>
  );
}
