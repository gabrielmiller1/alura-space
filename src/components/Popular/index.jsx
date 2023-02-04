import React from 'react';
import styles from './Popular.module.scss';
import popularPhotos from './popular-photos.json';

export default function Popular() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {popularPhotos.map((popularPhoto) => {
                return (
                    <li key={popularPhoto.id}>
                        <img src={popularPhoto.path} alt={popularPhoto.alt} />
                    </li>
                )
            })}
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
