import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({tags, onTagClick, resetFilter}) {

  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
          <li onClick={resetFilter}>Todos</li>
          {
            tags.map(tag => {
              return (
                <li key={tag} onClick={() => {onTagClick(tag)}}>
                  {tag}
                </li>
                )
            })
          }
        </ul>
    </div>
  )
}
