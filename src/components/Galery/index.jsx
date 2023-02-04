import React, { useState } from "react";
import Tags from "../Tags";
import Cards from "./Cards";
import styles from "./Galery.module.scss";
import photos from "./photos.json";

export default function Galery() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((photo) => photo.tag))];

  const photosFilter = (tag) => {
    console.log(tag)
    const filteredPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(filteredPhotos);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela Galeria</h2>
      <Tags tags={tags} photosFilter={photosFilter} setItens={setItens}/>
      <Cards items={itens} styles={styles} />
    </section>
  );
}
