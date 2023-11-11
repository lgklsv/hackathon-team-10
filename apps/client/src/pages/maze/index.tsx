import { useEffect, useState } from 'react'

import styles from './index.module.css'

export default function MazePage() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    fetch('/api/test/654eb5a275673c260b8074d2')
      .then((res) => res.json())
      .then((res) => setGreeting(res.message))
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.root__maze}>
        <h1>{greeting}</h1>
      </div>
    </div>
  )
}
