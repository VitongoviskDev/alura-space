import React, { useState } from 'react'
import Tags from 'components/Tags'
import Cards from './Cards';

import styles from './Galeria.module.scss';

import fotos from './fotos.json';


export default function Galeria() {

  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(valor => valor.tag))]

  const Filter = (tag) => {
    
    const novasFotos = fotos.filter(foto => foto.tag === tag)
    setItens(novasFotos);
  }
  const ResetFilter = () =>{
    setItens(fotos);
  }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} onTagClick={Filter} resetFilter={ResetFilter}/>
        <Cards itens={itens} styles={styles}/>
    </section>
  )
}
