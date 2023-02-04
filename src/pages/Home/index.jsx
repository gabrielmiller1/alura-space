import banner from "./banner.png";
import styles from "./Home.module.scss";

import Galery from "components/Galery";
import Header from "components/Header";
import Menu from "components/Menu";
import Popular from "components/Popular";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galery />
          <Popular />
        </div>
      </main>
    </>
  );
}
